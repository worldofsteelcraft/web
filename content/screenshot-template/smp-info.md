---
title: "SMP Info"
description: "Use this to screenshot server info"
date: 2022-05-08T00:00:01Z
sitemapExclude: true
hideHeader: true
hideFooter: true
hideSidebar: true
---
<script src="/scripts/smp-query.js"></script>
<div class="ss-template-container smp-status">
    <img src="/images/logo.png" class="style-exclude" width="150px">
                   <noscript>This service won't work until you enable Javascript, Please Enable it
                   <style>.serverstatus-sstemplate-content{display:none;}</style></noscript>
<div class="serverstatus-sstemplate-content">   
                    <div class="serverstatuspanel">
                    <table>
                        <tbody><tr><th>Server IP Address</th><td><span id="hostname">Loading... </span></td></tr>
                        <tr><th>Server Port</th><td><span id="port">Loading...</span></td></tr>
                        <tr><th>Status</th><td><div id="isonline">Loading...</div></td></tr>
                         <tr class="ping-disable-when-offline"><th>MOTD</th><td><span id="motd">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Version Running</th><td><span id="version">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Players</th><td><span id="playercount">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Map Name</th><td><span id="mapname">Loading...</span></td></tr>
                        </tbody>
                    </table>
                    <div id="isoffline-sstemplate-css"></div>
                    <style>div.serverstatuspanel{width:100%;}</style>
                </div>
    </div>
    <span id="isoffline-sstemplate-text"></span>
    <p>Check <a href="https://worldofsteelcraft.tk/server/smp">https://worldofsteelcraft.tk/server/smp</a> for more info</p>
</div>
</div>
</div>