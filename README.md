# TFDN Impact Hub Application

A comprehensive web platform for the Taji Fanisi Development Network, designed to transform Africa through innovation and impact by connecting education, career development, and social innovation initiatives.

## 🎯 Project Overview

The TFDN Impact Hub is a modern web application that serves as a digital platform for:
- **Education & Career Development**: AI-powered career guidance and educational resources
- **Social Innovation**: Showcasing impact stories and development frameworks
- **Community Building**: Connecting partners and stakeholders across Africa
- **Research & Insights**: Sharing knowledge and research findings

## 🚀 Tech Stack

### Frontend
- **React 19** with TypeScript
- **Material-UI (MUI)** for component library
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Recharts** for data visualization

### Backend
- **Convex** for real-time database and backend
- **Convex Auth** for authentication
- **TypeScript** for type safety

### Development Tools
- **Vite** for fast development and building
- **ESLint** for code linting
- **Prettier** for code formatting

## 📁 Project Structure

```
tfdn_impact_hub_application/
├── convex/                    # Backend (Convex)
│   ├── _generated/           # Auto-generated Convex files
│   ├── auth.config.ts        # Authentication configuration
│   ├── auth.ts              # Authentication logic
│   ├── http.ts              # HTTP endpoints
│   ├── router.ts            # Custom HTTP routes
│   └── schema.ts            # Database schema
├── src/
│   ├── components/          # Reusable React components
│   │   ├── AICareer/        # AI Career guidance components
│   │   ├── Layout/          # Layout components (Header, Footer)
│   │   ├── Timeline/        # Interactive timeline components
│   │   └── common/          # Common UI components
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx     # Landing page
│   │   ├── FrameworkPage.tsx # Development framework
│   │   ├── AICareerPage.tsx # AI career guidance
│   │   ├── ResearchPage.tsx # Research and insights
│   │   ├── PartnersPage.tsx # Partners showcase
│   │   ├── GetInvolvedPage.tsx # Community engagement
│   │   └── PillarDetailPage.tsx # Detailed pillar information
│   ├── data/                # Static data and mock data
│   ├── lib/                 # Utility functions and configurations
│   ├── App.tsx              # Main application component
│   ├── SignInForm.tsx       # Authentication form
│   └── SignOutButton.tsx    # Sign out functionality
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/landroverism/TFNDN-ImpactHub-Application.git
   cd TFNDN-ImpactHub-Application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   - Create a Convex account at [convex.dev](https://convex.dev)
   - Create a new project
   - Copy your Convex deployment URL
   - Create a `.env` file in the root directory:
     ```env
     VITE_CONVEX_URL=your_convex_deployment_url_here
     ```

4. **Start development servers**
   ```bash
   npm run dev
   ```
   This will start both the frontend (Vite) and backend (Convex) servers.

### Available Scripts

- `npm run dev` - Start development servers (frontend + backend)
- `npm run dev:frontend` - Start only the frontend server
- `npm run dev:backend` - Start only the Convex backend
- `npm run build` - Build for production
- `npm run lint` - Run linting and type checking

## 🏗️ Architecture

### Frontend Architecture
- **Component-based**: Modular React components with TypeScript
- **Routing**: React Router for navigation between pages
- **State Management**: Convex for real-time data and state
- **Styling**: Material-UI + Tailwind CSS for consistent design
- **Animations**: Framer Motion for smooth user interactions

### Backend Architecture
- **Database**: Convex real-time database
- **Authentication**: Convex Auth with anonymous sign-in
- **API**: Convex functions (queries, mutations, actions)
- **File Storage**: Convex file storage for media assets

### Key Features
- **Real-time Updates**: Live data synchronization
- **Responsive Design**: Mobile-first approach
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized with Vite and modern React patterns

## 📱 Pages & Features

### Core Pages
1. **Home Page** (`/`) - Landing page with impact stats and stories
2. **Framework Page** (`/framework`) - Development framework overview
3. **AI Career Page** (`/ai-career`) - Interactive career guidance
4. **Research Page** (`/research`) - Research and insights
5. **Partners Page** (`/partners`) - Partner organizations
6. **Get Involved Page** (`/get-involved`) - Community engagement
7. **Pillar Detail Page** (`/pillars/:id`) - Detailed pillar information

### Key Components
- **Header/Footer**: Navigation and branding
- **StatCard**: Impact statistics display
- **PillarCard**: Framework pillar information
- **CareerQuiz**: AI-powered career assessment
- **InteractiveTimeline**: Visual timeline component

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Component Development
- Create components in appropriate directories
- Use TypeScript interfaces for props
- Implement responsive design
- Add proper error handling

### Convex Development
- Follow Convex best practices
- Use proper validators for all functions
- Implement proper error handling
- Use TypeScript for type safety

### Git Workflow
1. Create feature branches from `main`
2. Make atomic commits with clear messages
3. Test thoroughly before pushing
4. Create pull requests for review

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Convex Deployment
The backend automatically deploys when you push to the main branch or use:
```bash
npx convex deploy
```

### Environment Variables
- `VITE_CONVEX_URL`: Your Convex deployment URL
- Add other environment variables as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup for Contributors
1. Follow the installation steps above
2. Set up your own Convex project for development
3. Update the `.env` file with your Convex URL
4. Follow the coding guidelines

## 📚 Resources

- [Convex Documentation](https://docs.convex.dev/)
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🐛 Troubleshooting

### Common Issues
1. **Convex connection errors**: Check your `VITE_CONVEX_URL` environment variable
2. **Build errors**: Ensure all dependencies are installed
3. **Type errors**: Run `npm run lint` to check for issues

### Getting Help
- Check the [Issues](https://github.com/landroverism/TFNDN-ImpactHub-Application/issues) page
- Create a new issue for bugs or feature requests
- Contact the development team

## 📄 License

This project is part of the Taji Fanisi Development Network initiative.

---

**Built with ❤️ for Africa's development and innovation**
