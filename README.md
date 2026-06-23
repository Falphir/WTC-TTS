# WTC To The Sky

A Minecraft 1.21.1 modpack by Falphir & ArneSW, built on NeoForge 21.1.234.

## Getting Started with Packwiz

### 1. Install Packwiz

Download the latest `packwiz` binary from the [packwiz releases page](https://github.com/packwiz/packwiz/releases) and add it to your PATH.

### 2. Install a Compatible Launcher

Packwiz works with launchers that support the packwiz installer. The recommended option is **Prism Launcher** (or any MultiMC-based launcher).

### 3. Add the Modpack to Your Launcher

1. In Prism Launcher, create a new instance for **Minecraft 1.21.1** with **NeoForge 21.1.234**.
2. Go to the instance settings and add a **Pre-launch command** using the packwiz-installer bootstrap:

```
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://<your-hosted-pack.toml-url>
```

> If you're running this locally, you can use `packwiz serve` to host the pack:
> ```
> packwiz serve
> ```
> Then point the installer to `http://localhost:8080/pack.toml`.

### 4. Sync the Modpack

Once the launcher is configured, launch the instance. The packwiz installer will automatically download all mods before the game starts.

### Updating the Pack (for developers)

To refresh the pack index after adding or removing mods:

```
packwiz refresh
```

To add a mod from CurseForge:

```
packwiz curseforge add <mod-slug>
```

To update all mods to their latest versions:

```
packwiz update --all
```
