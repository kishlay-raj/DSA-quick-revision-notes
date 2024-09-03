/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ImageCollectorPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var ImageCollectorPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.addCommand({
      id: "export-markdown-images",
      name: "Export markdown images",
      callback: () => {
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile && activeFile instanceof import_obsidian.TFile && activeFile.extension === "md") {
          this.exportMarkdownImages(activeFile);
        } else {
          new import_obsidian.Notice("No active markdown file.");
        }
      }
    });
    this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
      if (file instanceof import_obsidian.TFile && file.extension === "md") {
        menu.addItem((item) => {
          item.setTitle("Export images").setIcon("document-export").onClick(() => {
            this.exportMarkdownImages(file);
          });
        });
      }
    }));
  }
  async exportMarkdownImages(file) {
    const fileContent = await this.app.vault.read(file);
    const imageRegex = /!\[\[(.*?)\]\]|!\[(.*?)\]\((.*?)(?:\|.*?)?\)/g;
    let match;
    const images = [];
    while ((match = imageRegex.exec(fileContent)) !== null) {
      let imagePath = match[1] || match[3];
      if (imagePath) {
        imagePath = decodeURIComponent(imagePath.trim());
        if (imagePath.includes("|")) {
          imagePath = imagePath.split("|")[0];
        }
        images.push(imagePath);
      }
    }
    if (images.length === 0) {
      new import_obsidian.Notice("No images found in the markdown file.");
      return;
    }
    const targetFolderName = `${file.basename} images`;
    await this.app.vault.createFolder(targetFolderName).catch(() => {
    });
    for (const imagePath of images) {
      const imageFile = this.app.metadataCache.getFirstLinkpathDest(imagePath, file.path);
      if (imageFile instanceof import_obsidian.TFile) {
        try {
          const imageContent = await this.app.vault.readBinary(imageFile);
          const targetPath = `${targetFolderName}/${imageFile.name}`;
          await this.app.vault.createBinary(targetPath, imageContent);
          new import_obsidian.Notice(`Exported ${imageFile.name} to ${targetPath}`);
        } catch (error) {
          new import_obsidian.Notice(`Failed to export image ${imageFile.name}: ${error}`);
          console.error(`Failed to export image ${imageFile.name}:`, error);
        }
      } else {
        new import_obsidian.Notice(`Image not found: ${imagePath}`);
        console.error(`Image not found: ${imagePath}`);
      }
    }
  }
};
