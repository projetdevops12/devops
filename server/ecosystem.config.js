module.exports = {
    apps: [
        {
            name: "projetdevops",
            cwd: "/var/www/devops/server",
            script: "src/index.js",
            instances: 1,
            exec_mode: "fork",
            watch: false,
            env: {
                NODE_ENV: "production",
                PORT: 5000
            }
        }
    ]
};