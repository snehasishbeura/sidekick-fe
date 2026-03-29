import React, { useState, useRef, useEffect } from 'react';
import { CHATBOT_CONFIG } from '../../config/chatbotconfig';

// ── Helpers ──────────────────────────────────────────────────
const BOT = 'bot';
const USER = 'user';

const msg = (role, text, options = null) => ({ role, text, options, id: Date.now() + Math.random() });

// ── Chatbot Component ─────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState('menu'); // 'menu' | 'issues' | 'answer' | 'followup'
  const [activeCategory, setActiveCategory] = useState(null);
  const bottomRef = useRef(null);

  // Init welcome message
  useEffect(() => {
    if (open && messages.length === 0) showMenu();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const push = (newMsg) => setMessages((prev) => [...prev, newMsg]);

  function showMenu() {
    setStep('menu');
    setActiveCategory(null);
    push(
      msg(BOT, CHATBOT_CONFIG.welcomeMessage, CHATBOT_CONFIG.categories.map((c) => ({ id: c.id, label: c.label })))
    );
  }

  function handleCategorySelect(catId) {
    const cat = CHATBOT_CONFIG.categories.find((c) => c.id === catId);
    if (!cat) return;
    setActiveCategory(cat);
    setStep('issues');
    push(msg(USER, cat.label));
    push(msg(BOT, 'Please choose your issue:', cat.issues.map((i) => ({ id: i.id, label: i.label }))));
  }

  function handleIssueSelect(issueId) {
    const issue = activeCategory?.issues.find((i) => i.id === issueId);
    if (!issue) return;
    setStep('answer');
    push(msg(USER, issue.label));
    push(msg(BOT, issue.response, null));
    // Show follow-up after short delay
    setTimeout(() => {
      setStep('followup');
      push(msg(BOT, CHATBOT_CONFIG.followUp.prompt, CHATBOT_CONFIG.followUp.options));
    }, 600);
  }

  function handleFollowUp(optId) {
    if (optId === 'menu') {
      push(msg(USER, '🏠 Go back to Main Menu'));
      showMenu();
    } else if (optId === 'human') {
      push(msg(USER, '🧑‍💼 Contact Human Support'));
      push(msg(BOT, CHATBOT_CONFIG.humanSupportMessage));
      setStep('answer');
    } else if (optId === 'yes') {
      push(msg(USER, '✅ Yes, thanks!'));
      push(msg(BOT, "Great! Glad I could help. 😊\nFeel free to ask anything else anytime.", [{ id: 'menu', label: '🏠 Back to Main Menu' }]));
      setStep('followup');
    } else if (optId === 'no') {
      push(msg(USER, '❌ No'));
      push(msg(BOT, "Sorry about that! Let me connect you to our support team.", [
        { id: 'human', label: '🧑‍💼 Contact Human Support' },
        { id: 'menu', label: '🏠 Back to Main Menu' },
      ]));
      setStep('followup');
    }
  }

  function handleOptionClick(optId) {
    if (step === 'menu') handleCategorySelect(optId);
    else if (step === 'issues') handleIssueSelect(optId);
    else if (step === 'followup') handleFollowUp(optId);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
          border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(124,58,237,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, transition: 'transform 0.2s',
        }}
        title="SideKick Support"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 92, right: 24, zIndex: 9998,
          width: 360, maxHeight: 560,
          background: '#0F0B21',
          border: '1px solid #2D2653',
          borderRadius: 20,
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif',
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 18px',
            background: 'linear-gradient(135deg, #7C3AED22, #1A1535)',
            borderBottom: '1px solid #2D2653',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}>🤖</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#F1F0F7' }}>{CHATBOT_CONFIG.botName}</div>
              <div style={{ fontSize: 11, color: '#34D399' }}>● Online</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '14px 14px 8px',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {messages.map((m) => (
              <div key={m.id} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === BOT ? 'flex-start' : 'flex-end' }}>
                {/* Bubble */}
                <div style={{
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: m.role === BOT ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                  background: m.role === BOT ? '#1A1535' : 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                  border: m.role === BOT ? '1px solid #2D2653' : 'none',
                  color: '#F1F0F7',
                  fontSize: 13,
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                }}>
                  {m.text}
                </div>

                {/* Options */}
                {m.options && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8, width: '100%' }}>
                    {m.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionClick(opt.id)}
                        style={{
                          background: '#1A1535',
                          border: '1px solid #433B72',
                          borderRadius: 10,
                          padding: '8px 12px',
                          color: '#C4B5FD',
                          fontSize: 12,
                          fontWeight: 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background 0.2s, border-color 0.2s',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) => { e.target.style.background = '#2D2653'; e.target.style.borderColor = '#7C3AED'; }}
                        onMouseLeave={(e) => { e.target.style.background = '#1A1535'; e.target.style.borderColor = '#433B72'; }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>
      )}
    </>
  );
}
