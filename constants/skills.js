export const skills = {
    filters: [
        { name: "Programming Languages", filter: "language" },
        { name: "Frontend", filter: "web" },
        { name: "Backend", filter: "backend" },
        { name: "Database", filter: "database" },
        { name: "AI & ML", filter: "ai-ml" },
        { name: "Tools", filter: "tool" },
        { name: "Expertise", filter: "expertise" }
    ],
    skillset: [
        // Programming Languages
        { name: "Python", category: "language", icon: "devicon-python-plain colored" },
        { name: "C/C++", category: "language", icon: "devicon-cplusplus-plain colored" },
        { name: "TypeScript", category: "language", icon: "devicon-typescript-plain colored" },
        { name: "JavaScript", category: "language", icon: "devicon-javascript-plain colored" },
        { name: "SQL", category: "language", icon: "devicon-mysql-plain colored" },

        // Frontend
        { name: "HTML5", category: "web", icon: "devicon-html5-plain colored" },
        { name: "CSS3", category: "web", icon: "devicon-css3-plain colored" },
        { name: "React.js", category: "web", icon: "devicon-react-original colored" },
        { name: "Next.js", category: "web", icon: "devicon-nextjs-plain colored" },
        { name: "Tailwind CSS", category: "web", icon: "devicon-tailwindcss-plain colored" },
        { name: "Redux", category: "web", icon: "devicon-redux-original colored" },
        { name: "Framer Motion", category: "web", icon: "devicon-framermotion-original colored" }, 
        { name: "Vite", category: "web", icon: "devicon-vitejs-plain colored" },
       
        // Backend
        { name: "Node.js", category: "backend", icon: "devicon-nodejs-plain colored" },
        { name: "PHP", category: "backend", icon: "devicon-php-plain colored" },
        { name: "Socket.io", category: "backend", icon: "devicon-socketio-original colored" }, 
        { name: "Streamlit", category: "backend", icon: "devicon-streamlit-plain colored" }, 

        //Databases
        { name: "MongoDB", category: "database", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", category: "database", icon: "devicon-mysql-plain colored" },
        { name: "Convex", category: "database" }, // listed separately for clarity

        // AI & ML
        { name: "ML Algorithms", category: "ai-ml" },
        { name: "Scikit-learn", category: "ai-ml", icon: "devicon-scikitlearn-plain colored" },
        { name: "Pandas", category: "ai-ml", icon: "devicon-pandas-plain colored" },
        { name: "NumPy", category: "ai-ml", icon: "devicon-numpy-plain colored" },
        { name: "OpenAI / Generative AI", category: "ai-ml" },

        // Developer Tools
        { name: "Git", category: "tool", icon: "devicon-git-plain colored" },
        { name: "Github", category: "tool", icon: "devicon-github-original colored" },
        { name: "VS Code", category: "tool", icon: "devicon-vscode-plain colored" },
        { name: "npm", category: "tool", icon: "devicon-npm-plain colored" },
        { name: "Google Colab", category: "tool", icon: "devicon-jupyter-plain colored" },
        
        // Areas of expertise
        { name: "Data Structures & Algorithms", category: "expertise" },
        { name: "UI/UX", category: "expertise" },
        { name: "OOPS", category: "expertise" },
        { name: "DBMS", category: "expertise" },
        { name: "Operating Systems", category: "expertise" },
        { name: "Computer Networks", category: "expertise" }
    ]
};
