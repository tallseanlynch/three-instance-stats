import fs from 'fs';

fs.copyFile('src/instance-stats.css', 'dist/instance-stats.css', (err) => {
  if (err) throw err;
  console.log('src/instance-stats.css was copied to dist/instance-stats.css');
});