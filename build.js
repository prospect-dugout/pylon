const babel = require('@babel/core');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const dirs = ['ui', 'lib', 'style', 'configs'];

dirs.forEach((dir) => {
  // Adjust the glob pattern to search from the project root if necessary
  glob(
    `${dir}/**/*.{ts,tsx}`,
    {ignore: `**/*.stories.{ts,tsx}`},
    (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      files.forEach((file) => {
        babel
          .transformFileAsync(file, {})
          .then((result) => {
            // Change the output file extension to .js
            const outputFilePath = file.replace(/\.[jt]sx?$/, '.js');
            // Compute the correct output directory within dist
            const outputPath = path.join('dist', outputFilePath);
            // Ensure the directory exists
            fs.mkdirSync(path.dirname(outputPath), {recursive: true});
            // Write the transformed code to the new file
            fs.writeFileSync(outputPath, result.code);
          })
          .catch(console.error);
      });
    },
  );

  // Handle .css and .config files
  glob(
    `${dir}/**/*.{css,config,json,js}`,
    {ignore: `**/*.stories.{ts,tsx}`},
    (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      files.forEach((file) => {
        const outputPath = path.join('dist', file);
        fs.mkdirSync(path.dirname(outputPath), {recursive: true});
        fs.copyFileSync(file, outputPath);
      });
    },
  );
});
