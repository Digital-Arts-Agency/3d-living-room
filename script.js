import {
  ViewerApp,
  AssetManagerPlugin,
  addBasePlugins,
  MaterialConfiguratorPlugin
} from "https://dist.pixotronics.com/webgi/runtime/bundle-0.9.3.mjs";

async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("mcanvas")
  });

  // Add all the plugins at once
  await addBasePlugins(viewer);

  await viewer.addPlugin(MaterialConfiguratorPlugin)

  const manager = await viewer.addPlugin(AssetManagerPlugin);
  // // This must be called after adding any plugin that changes the render pipeline.
  // viewer.renderer.refreshPipeline();

  // // Load a 3d model configured in the webgi editor using MaterialConfiguratorPlugin
  await viewer.load(
    "https://rio-assets.s3.eu-west-2.amazonaws.com/furniture/living-room.glb"
  );

}

setupViewer();