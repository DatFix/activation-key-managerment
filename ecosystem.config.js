module.exports = {
  apps: [
    {
      name: "react",
      script: "./node_modules/.bin/vite",
      args: "preview",
      cwd: "/var/www/activation-key-managerment",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
