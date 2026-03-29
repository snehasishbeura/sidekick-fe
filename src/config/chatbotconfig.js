// ============================================================
// SideKick Support Chatbot - Flow Configuration
// Edit responses, options, and categories here
// ============================================================

export const CHATBOT_CONFIG = {
  botName: "SideKick Support",
  welcomeMessage:
    "Hi, welcome to SideKick Support! 👋\nI'm here to help you quickly.\nPlease choose what you need help with:",

  // After every final answer, show these options
  followUp: {
    prompt: "Was this helpful?",
    options: [
      { id: "yes", label: "✅ Yes, thanks!" },
      { id: "no", label: "❌ No" },
      { id: "menu", label: "🏠 Go back to Main Menu" },
      { id: "human", label: "🧑‍💼 Contact Human Support" },
    ],
  },

  humanSupportMessage:
    "Our support team is available at support@sidekick.app\nOr visit Help & Support inside the app.",

  // Main categories
  categories: [
    {
      id: "navigation",
      label: "🗺️ Feature Understanding & Navigation Issues",
      issues: [
        {
          id: "nav_1",
          label: "How do I create a companion request?",
          response:
            "To create a companion request:\n1. Open the app\n2. Go to the Events/Meetups section\n3. Tap Create Request\n4. Add your activity, date, time, and location\n5. Select your interests\n6. Publish the request\n\nOther users will then be able to view it and respond if interested.",
        },
        {
          id: "nav_2",
          label: "Where do I see my match percentage?",
          response:
            "Your match percentage is shown on the user profile or companion suggestion card.\nIt appears after interests, preferences, and activity details are compared.\n\nIf you do not see it, please refresh the page or reopen the app.",
        },
        {
          id: "nav_3",
          label: "How do I manually browse available people?",
          response:
            "To browse people manually:\n1. Open the Discover / Browse section\n2. Use filters like interests, location, or event type\n3. Tap on a profile to view details\n4. Send a request or invite if you want to connect",
        },
        {
          id: "nav_4",
          label: "What do the interest tags mean?",
          response:
            "Interest tags help the app show users with similar preferences.\nFor example: music, concerts, travel, food, sports, dating, or friendship.\n\nThe more relevant tags you add, the better your visibility and compatibility results may be.",
        },
        {
          id: "nav_5",
          label: "How do I update my event details?",
          response:
            "To update your event details:\n1. Go to My Events / My Requests\n2. Select the event you want to edit\n3. Tap Edit\n4. Update the details\n5. Save your changes",
        },
        {
          id: "nav_6",
          label: "Where's the location sharing toggle?",
          response:
            "You can manage location sharing in:\nSettings > Privacy > Location Sharing\n\nFrom there, you can turn location access on or off and choose who can view it.",
        },
      ],
    },
    {
      id: "technical",
      label: "⚙️ Technical & Account Management Problems",
      issues: [
        {
          id: "tech_1",
          label: "App is crashing when I try to post an event",
          response:
            "Please try the following:\n1. Close and reopen the app\n2. Check your internet connection\n3. Update the app to the latest version\n4. Try posting again\n\nIf the issue continues, please submit a bug report through Help > Report a Problem.",
        },
        {
          id: "tech_2",
          label: "Can't turn off notifications",
          response:
            "To manage notifications:\n1. Go to Settings\n2. Tap Notifications\n3. Turn off the alerts you do not want\n\nIf notifications are still active, also check your phone's device notification settings.",
        },
        {
          id: "tech_3",
          label: "Forgot password / reset account",
          response:
            "To reset your password:\n1. Tap Login\n2. Select Forgot Password\n3. Enter your registered email or mobile number\n4. Follow the reset instructions sent to you\n\nIf you do not receive the link or code, please check spam/junk folders.",
        },
        {
          id: "tech_4",
          label: "Profile picture won't upload",
          response:
            "Please try the following:\n1. Make sure your image is clear and supported\n2. Check that the file size is within allowed limits\n3. Confirm your internet connection is stable\n4. Retry from Profile > Edit Profile\n\nIf the upload still fails, please try another image.",
        },
        {
          id: "tech_5",
          label: "Location not updating in real-time",
          response:
            "Please check these settings:\n1. Enable location permission for the app\n2. Turn on GPS on your device\n3. Make sure battery saver mode is off\n4. Reopen the app\n\nIf the issue continues, restart your phone and try again.",
        },
        {
          id: "tech_6",
          label: "Chat messages not sending",
          response:
            "If your messages are not sending:\n1. Check your internet connection\n2. Restart the app\n3. Confirm the other user has not blocked you\n4. Try sending the message again\n\nIf messages continue to fail, please report the issue to support.",
        },
      ],
    },
    {
      id: "safety",
      label: "🛡️ Safety, Privacy & Reporting Concerns",
      issues: [
        {
          id: "safe_1",
          label: "How do I report a suspicious user?",
          response:
            "To report a user:\n1. Open the user's profile or chat\n2. Tap Report User\n3. Select the reason\n4. Submit the report\n\nOur team will review the report and take appropriate action.",
        },
        {
          id: "safe_2",
          label: "Someone is harassing me",
          response:
            "We're sorry you're facing this.\nPlease take these steps immediately:\n1. Open the chat or profile\n2. Tap Block\n3. Tap Report User\n4. Submit details of the harassment\n\nIf you feel unsafe, please contact local authorities immediately.",
        },
        {
          id: "safe_3",
          label: "I want to hide my location from specific users",
          response:
            "To manage location visibility:\n1. Go to Settings > Privacy > Location Sharing\n2. Choose who can see your location\n3. Turn off sharing for specific users if available\n\nYou can also disable live location sharing completely at any time.",
        },
        {
          id: "safe_4",
          label: "Had a bad meetup experience",
          response:
            "We're sorry to hear that.\nPlease help us review the incident:\n1. Open Help & Safety\n2. Tap Report Meetup Issue\n3. Share the event details and your concern\n\nIf the situation involves immediate danger, please contact local emergency services.",
        },
        {
          id: "safe_5",
          label: "Privacy policy questions",
          response:
            "You can read our privacy policy in:\nSettings > Legal > Privacy Policy\n\nIt explains how your data, location, and account information are used and protected.",
        },
        {
          id: "safe_6",
          label: "Block / unblock users",
          response:
            "To block a user:\n1. Open their profile or chat\n2. Tap Block User\n\nTo unblock a user:\n1. Go to Settings > Privacy > Blocked Users\n2. Select the user\n3. Tap Unblock",
        },
      ],
    },
    {
      id: "events",
      label: "📅 Event & Companion Request Management",
      issues: [
        {
          id: "event_1",
          label: "How do I edit my posted event?",
          response:
            "To edit your event:\n1. Go to My Events\n2. Select the event\n3. Tap Edit\n4. Update the details\n5. Save your changes",
        },
        {
          id: "event_2",
          label: "Can I cancel a companion request?",
          response:
            "Yes, you can cancel a companion request.\nTo do this:\n1. Open My Requests\n2. Select the request\n3. Tap Cancel Request\n\nOnce canceled, it will no longer be visible to other users.",
        },
        {
          id: "event_3",
          label: "What happens when someone joins my event?",
          response:
            "When someone joins your event:\n1. You will receive a notification\n2. You can review their profile\n3. You may accept, reject, or continue chatting depending on app settings\n\nOnce confirmed, both of you can coordinate through the app.",
        },
        {
          id: "event_4",
          label: "How do I filter companion requests?",
          response:
            "To filter companion requests:\n1. Open the Browse / Discover page\n2. Tap Filters\n3. Choose preferences such as location, interests, age range, or event type\n4. Apply the filters",
        },
        {
          id: "event_5",
          label: "Event expired but I still want companions",
          response:
            "If your event has expired, you can create a new request with updated date and time.\nGo to My Events, select the expired event if duplication is available, or create a fresh one manually.",
        },
        {
          id: "event_6",
          label: "Make my event private / public",
          response:
            "To change your event visibility:\n1. Open My Events\n2. Select the event\n3. Tap Edit Visibility\n4. Choose Private or Public\n5. Save your changes",
        },
      ],
    },
    {
      id: "feedback",
      label: "💬 Feedback & Community Questions",
      issues: [
        {
          id: "feed_1",
          label: "How can I suggest new features?",
          response:
            "We'd love to hear your ideas.\nTo suggest a new feature:\n1. Go to Help & Support\n2. Tap Send Feedback\n3. Enter your suggestion and submit it",
        },
        {
          id: "feed_2",
          label: "Is there a community guideline?",
          response:
            "Yes. Our community guidelines are available in:\nSettings > Legal / Community Guidelines\n\nThese rules explain respectful behavior, safety expectations, and prohibited activity.",
        },
        {
          id: "feed_3",
          label: "How do I become a trusted member?",
          response:
            "Trusted member status may depend on profile completion, verification, good behavior, and community activity.\nPlease complete your profile and follow app guidelines to improve trust visibility.",
        },
        {
          id: "feed_4",
          label: "What's the verification process?",
          response:
            "To verify your profile:\n1. Open Profile Settings\n2. Tap Verification\n3. Follow the steps provided\n\nVerification may include phone, email, or identity confirmation depending on app policy.",
        },
        {
          id: "feed_5",
          label: "Rating / review system questions",
          response:
            "Ratings and reviews help maintain trust in the community.\nAfter an event or meetup, you may be asked to rate your experience.\nThese reviews may be used to improve safety and user quality.",
        },
        {
          id: "feed_6",
          label: "App improvement suggestions",
          response:
            "Thank you for helping us improve.\nPlease submit your feedback through:\nHelp & Support > Feedback\n\nOur team reviews all improvement suggestions regularly.",
        },
      ],
    },
  ],
};
