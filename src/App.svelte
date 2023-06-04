<script lang="ts">
  import Greet from "./lib/Greet.svelte";
  import {
    Theme,
    RadioButtonGroup,
    RadioButton,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import Fade from "carbon-icons-svelte/lib/Fade.svelte";
  import "normalize.css";
  import "carbon-components-svelte/css/all.css";

  import type { CarbonTheme } from "carbon-components-svelte/types/Theme/Theme.svelte";
  import { onMount } from "svelte";

  let theme: CarbonTheme = "white";
  let isSideNavOpen = false;
</script>

<Theme bind:theme />

<Header platformName="Orizuru" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/" text="Link 1" />
    <HeaderNavItem href="/" text="Link 2" />
    <HeaderNavItem href="/" text="Link 3" />
    <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/" text="Link 1" />
      <HeaderNavItem href="/" text="Link 2" />
      <HeaderNavItem href="/" text="Link 3" />
    </HeaderNavMenu>
    <HeaderNavItem href="/" text="Link 4" />
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
  <SideNavItems>
    <SideNavLink icon={Fade} text="Link 1" href="/" isSelected />
    <SideNavLink icon={Fade} text="Link 2" href="/" />
    <SideNavLink icon={Fade} text="Link 3" href="/" />
    <SideNavMenu icon={Fade} text="Menu">
      <SideNavMenuItem href="/" text="Link 1" />
      <SideNavMenuItem href="/" text="Link 2" />
      <SideNavMenuItem href="/" text="Link 3" />
    </SideNavMenu>
    <SideNavDivider />
    <SideNavLink icon={Fade} text="Link 4" href="/" />
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <p>Click on the Tauri, Vite, and Svelte logos to learn more.</p>

        <div class="row">
          <Greet />
        </div>
      </Column>
    </Row>
  </Grid>
</Content>

<style lang="scss">
</style>
