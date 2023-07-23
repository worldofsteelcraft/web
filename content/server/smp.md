---
title: "SMP Server"
date: 2022-01-13T10:34:50+08:00
draft: false
description: "Check the WoSC SMP Server Status here!"
body_class: smp-status
singlepage: true
---
{{<html>}}
<script src="/scripts/minecraft_text/minecraft_text.min.js"></script>
<script src="/scripts/smp-query.js"></script>
<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/minecraftia" type="text/css"/>
<style>  
div.serverstatus{
    max-width:800px;
    margin:auto;
}
table.serverstatus-data-table{
    background: url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/brown-dirt-minecraft-pattern_thumb.jpg");   
    min-width:95%;
    width:95%;
    border:none !important;
    color:white; 
    border-radius: 10px;
    max-width:800px;
}
table.server-data-table tr, table.server-data-table td, table.server-data-table th, table.server-data-table {
    border:unset !important;
} 
    div.APIResponseDataContainer{
        font-family: 'MinecraftiaRegular';
        background-color:black; color:white; 
        border-radius:5px; 
        padding:2px 5px; 
        line-break: anywhere;
        display:inline-block;
    }
</style>
<div class="serverstatus pagetitle">
    <img src="/images/logo.png" class="style-exclude" width="150px">    
                <noscript>This service won't work until you enable Javascript, Please Enable it</noscript>
                    <div class="serverstatuspanel">
                    <table class="serverstatus-data-table">
                        <tbody><tr><th><i class="fa-solid fa-server"></i>  Server IP Address</th><td><div class="APIResponseDataContainer"><span id="hostname">Loading... </span></div></td></tr>
                        <tr><th><i class="fa-solid fa-server"></i>  Server Port</th><td><div class="APIResponseDataContainer"><span id="port">Loading...</span></div></td></tr>
                        <tr><th><i class="fa-solid fa-signal"></i>  Status</th><td><div id="isonline" class="APIResponseDataContainer">Loading...</div></td></tr>
                         <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-circle-info"></i>  MOTD</th><td><div class="APIResponseDataContainer"><span id="motd">Loading...</span></div></td></tr>
                        <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-code-branch"></i>Version Running</th><td><div class="APIResponseDataContainer"><span id="version">Loading...</span></div></td></tr>
                        <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-people-group"></i> Players</th><td><div class="APIResponseDataContainer"><span id="playercount">Loading...</span></div></td></tr>
                        <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-cube"></i> Map Name</th><td><div class="APIResponseDataContainer"><span id="mapname">Loading...</span></div></td></tr>
                        <tr><th><i class="fa-solid fa-clock"></i>  Time Checked</th><td><div class="APIResponseDataContainer"><span id="timefetched">Loading...</span></div></td></tr>
                        </tbody>
                    </table>
                    {{<collapsible name="Player Graph" class="collapsible-notbig collapsible-fullwidth">}}
                        <iframe id="playergraph" style="height:1075px; margin-top:-730px; border:5px #666 solid; border-radius:10px; width:360px;" scrolling="no"  loading="lazy"></iframe>
                    {{</collapsible>}}
                    <div id="isofflinecss"></div>
                    <style>div.serverstatuspanel{width:100%;}</style>
                </div>
                <a class="button button-green join-btn" href="https://link.worldofsteelcraft.tk/smp-save"><i class="fa-solid fa-gamepad"></i>  Join server(Members Only)</a>
</div>
{{</html>}}

***
{{<homepage/side-by-side>}}
    {{<homepage/content >}}
        <h1>Sample heading 1</h1>
        <p>Sample description 1</p>
    {{</homepage/content>}} 
    {{<homepage/content>}}
        <img src="/images/preview.png" width="100%">
    {{</homepage/content>}}
    {{<homepage/content>}}
    <img src="/images/preview.png" width="100%">
    {{</homepage/content>}}
    {{<homepage/content >}}
        <h1>Sample heading 2</h1>
        <p>Sample description 2</p>
    {{</homepage/content>}} 
    {{<homepage/content >}}
    <h1>Sample heading 3</h1>
    <p>Sample description 3</p>
    {{</homepage/content>}} 
    {{<homepage/content>}}
    <img src="/images/preview.png" width="100%">
    {{</homepage/content>}}
        {{<homepage/content>}}
    <img src="/images/preview.png" width="100%">
    {{</homepage/content>}}
    {{<homepage/content >}}
        <h1>Sample heading 4</h1>
        <p>Sample description 4</p>
    {{</homepage/content>}} 
{{</homepage/side-by-side>}}