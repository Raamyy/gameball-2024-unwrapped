const { bundle } = require('@remotion/bundler');
const { renderMedia, selectComposition } = require('@remotion/renderer');
const path = require('path');

// The composition you want to render
const compositionId = 'gameball-unwrapped';

const users = [
   "Nour Alhosainy"
  , "Mariam.William"
  , "Amr"
  , "mariam zakria"
  , "Youssef ElSayad"
  , "reem.alashry"
  , "Mohamed Ashraf"
  , "abdelrahman ahmed"
  , "Ahmed El Monady"
  , "Ahmed Elfiky"
  , "Raamyy"
  , "Jomana Wael"
  , "Mina Mohsen"
  , "Galal Shaban"
  , "youmna.khaled"
  , "kareem mohamed"
  , "mohaned tarek mashaly"
  , "Ziad Salah"
  , "Mohamed Ahmed"
  , "Mark Yasser"
  , "Mohamed Eyad Badran Elshenawy"
  , "Tasneem Hazem"
  , "Mostafa Moaty"
  , "mohamed.elaraby"
  , "Zeyad Waleed"
  , "amir wessam"]


  async function process(){

  // You only have to create a bundle once, and you may reuse it
  // for multiple renders that you can parametrize using input props.
  const bundleLocation = await bundle({
    entryPoint: path.resolve('./src/index.ts'),
    // If you have a webpack override in remotion.config.ts, pass it here as well.
    webpackOverride: (config) => config,
  });

  for (const user of users) {

    console.log("processing " + user);

    // Parametrize the video by passing props to your component.
    const inputProps = {
      CurrentUser: user,
    };

    // Get the composition you want to render. Pass `inputProps` if you
    // want to customize the duration or other metadata.
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: compositionId,
      inputProps,
    });

    // Render the video. Pass the same `inputProps` again
    // if your video is parametrized with data.
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation: `out/${user}.mp4`,
      inputProps,
    });

    console.log('Render done!');

  }
}

process()