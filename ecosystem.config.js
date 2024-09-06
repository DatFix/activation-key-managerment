module.exports = {
  apps: [
    {
      name: "react",
      script: "npx",
      args: "vite preview",
      cwd: "/var/www/activation-key-managerment",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
