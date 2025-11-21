// Homepage content configuration
export const homeContent = {
  hero: {
    badge: {
      show: false,
      text: "Strategies & Automation"
    },
    title: {
      line1: "Trade Smarter,",
      line2: "Not Harder."
    },
    subtitle: "Our battle-tested bots bring automation and consistency to your trading by executing your strategy exactly as programmed, without hesitation, emotion, or error. Say goodbye to fear, greed, and missed opportunities, and trade with precision instead of staring at charts all day.",
    buttons: {
      primary: {
        text: "Get Started - $49/mo",
        link: "/pricing.html"
      },
      secondary: {
        text: "View Features",
        link: "/features.html"
      }
    },
    stats: {
      show: true,
      items: [
        { number: "3+", label: "Years Optimized" },
        { number: "24/7", label: "Full Automation Capability" },
        { number: "200+", label: "Discord Members" }
      ]
    }
  },

  howItWorks: {
    title: "How It Works",
    subtitle: "We're constantly evolving with new strategies delivered to your TradingView account each month, all future updates included. Trade manually or automate for hands-free execution, and join 200+ active traders on our private Discord for daily insights, optimization tips, and direct team access.",
    steps: [
      {
        title: "1. Install our Strategies",
        description: "Add our Pine Script strategies to TradingView with one click. Works with your several brokers and exchanges."
      },
      {
        title: "2. Configure Your Settings",
        description: "Set your risk parameters, position sizes, and trading hours. Use our defaults or customize."
      },
      {
        title: "3. Monitor Performance",
        description: "Bots execute automatically while you check in daily to review trades and adjust as needed."
      }
    ]
  },

  pricing: {
    title: "Choose Your Plan",
    subtitle: "Get two months free when you subscribe annually, and add an optional personalized setup call to guide you through every step.",
    plans: [
      {
        id: "monthly",
        name: "Monthly",
        price: 49,
        period: "mo",
        popular: false,
        features: [
          "Access to all trading strategies",
          "24/7 automated trading",
          "TradingView integration",
          "Discord community access",
          "Monthly strategy updates"
        ]
      },
      {
        id: "annual",
        name: "Annual",
        price: 490,
        period: "yr",
        savings: "Save $98/year",
        popular: true,
        features: [
          "Access to all trading strategies",
          "24/7 automated trading",
          "TradingView integration",
          "Discord community access",
          "Monthly strategy updates",
          "2 months free"
        ]
      },
      {
        id: "setup",
        name: "Setup",
        price: 99,
        period: "one-time",
        isAddon: true,
        features: [
          "1-on-1 personalized setup call",
          "TradingView account configuration",
          "Risk management guidance",
          "Strategy customization",
          "Direct team support"
        ]
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "",
    items: [
      {
        question: "Do I need trading experience?",
        answer: "No! Our strategies come with clear instructions and our Discord community is here to help. However, we recommend starting with paper trading to build confidence before using real capital."
      },
      {
        question: "What trading platforms do the indicators work on?",
        answer: "Our indicators and strategies are designed for TradingView, the industry-standard charting platform used by millions of traders worldwide. For full automation, the brokers being used are Ninjatrader, Tradestation, Coinbase, TastyTrade, Tradovate, Binance, Alpaca, Robinhood, ProjectX, Tradier, Webull, E*Trade, Kracken, Bybit, and more coming."
      },
      {
        question: "Do the bots run automatically?",
        answer: "Yes. Our bots can run 24/7 without supervision. However, we recommend checking performance daily and adjusting settings as market conditions change to ensure optimal results."
      },
      {
        question: "What do the bots do?",
        answer: "Our bots execute trades based on technical indicators and are designed to remove emotional decision-making from your process. They can monitor multiple markets at once, work while you sleep, and consistently follow your trading rules with precision."
      },
      {
        question: "What don't the bots do?",
        answer: "While powerful, our bots don't guarantee profits—no strategy wins 100% of the time. They don't replace sound risk management, automatically react to breaking news, or perform perfectly under every market condition. Most importantly, they're not a shortcut to instant wealth, but a tool to help you trade with discipline and consistency."
      },
      {
        question: "Is risk management still important?",
        answer: "Absolutely. Risk management remains essential for long-term success. Start small, test your strategy thoroughly, and scale gradually as you gain confidence in your results."
      },
      {
        question: "Do you offer a discount?",
        answer: "Our annual plan saves you $98 per year (two months free)!"
      },
      {
        question: "How do refunds work?",
        answer: "When you cancel your subscription, a refund will be processed through Shopify. Once the refund is completed, you will be automatically removed from the Discord server and lose access to all subscription benefits."
      }
    ]
  }
};
