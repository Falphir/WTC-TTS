# WTC To The Sky

A Minecraft 1.21.1 modpack by Falphir & ArneSW, built on NeoForge 21.1.234.

## Requirements

- **Java 21** — required by NeoForge 1.21.1. Download from [Adoptium](https://adoptium.net/).
- **Prism Launcher** (or any MultiMC-based launcher) — download from [prismlauncher.org](https://prismlauncher.org/).

## Getting Started with Packwiz

### 1. Install Packwiz

Download the latest `packwiz` binary from the [packwiz releases page](https://github.com/packwiz/packwiz/releases) and add it to your PATH.

### 2. Download the Packwiz Installer Bootstrap

Download `packwiz-installer-bootstrap.jar` from the [packwiz-installer-bootstrap releases page](https://github.com/packwiz/packwiz-installer-bootstrap/releases).

Place the `.jar` file inside your Prism Launcher instance folder:

1. In Prism Launcher, right-click your instance and select **Folder**.
2. Open the `.minecraft` folder inside it.
3. Drop `packwiz-installer-bootstrap.jar` in there.

### 3. Create the Instance

1. In Prism Launcher, create a new instance for **Minecraft 1.21.1** with **NeoForge 21.1.234**.
2. Go to **Edit Instance → Settings → Custom Commands**.
3. Enable **Custom Commands** and add the following as the **Pre-launch command**:

```
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://<your-hosted-pack.toml-url>
```

> If you're running this locally, use `packwiz serve` to host the pack:
> ```
> packwiz serve
> ```
> Then use `http://localhost:8080/pack.toml` as the URL.

### 4. Launch

Launch the instance. The packwiz installer will automatically download all mods before the game starts. On subsequent launches it will only fetch any changes.

## Updating the Pack (for developers)

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
