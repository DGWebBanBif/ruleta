export default {
  server: {
    host: '0.0.0.0', // Esto permitirá conexiones externas
    port: 3000, // El puerto en el que quieres que corra el proyecto
  },
  build: {
    minify: false, // Desactiva la minificación de JavaScript
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
};