module.exports = {
    apps: [
        {
            name: "app",
            script: "index.js",
            watch: false,
            env: {
                NODE_ENV: "production"
                // PORT n'est pas défini ici car déjà dans ton backend
            }
        }
    ]
};