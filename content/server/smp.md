---
title: "SMP Server"
date: 2022-01-13T10:34:50+08:00
draft: false
description: "Check the WoSC SMP Server Status here!"
body_class: smp-status
singlepage: true
---
{{<html>}}
<script src="/scripts/smp-query.js"></script>
<div class="serverstatus pagetitle">
    <img src="/images/logo.png" class="style-exclude" width="150px">    
                <noscript>This service won't work until you enable Javascript, Please Enable it</noscript>
                    <div class="serverstatuspanel">
                    <table>
                        <tbody><tr><th>Server IP Address</th><td><span id="hostname">Loading... </span></td></tr>
                        <tr><th>Server Port</th><td><span id="port">Loading...</span></td></tr>
                        <tr><th>Status</th><td><div id="isonline">Loading...</div></td></tr>
                         <tr class="ping-disable-when-offline"><th>MOTD</th><td><span id="motd">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Version Running</th><td><span id="version">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Players</th><td><span id="playercount">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Map Name</th><td><span id="mapname">Loading...</span></td></tr>
                        <tr><th>Time Checked</th><td><span id="timefetched">Loading...</span></td></tr>
                        </tbody>
                    </table>
                    {{<collapsible name="Player Graph" class="collapsible-notbig collapsible-fullwidth">}}
                        <iframe id="playergraph" style="height:1075px; margin-top:-730px; border:5px #666 solid; border-radius:10px; width:360px;" scrolling="no"  loading="lazy"></iframe>
                    {{</collapsible>}}
                    <div id="isofflinecss"></div>
                    <style>div.serverstatuspanel{width:100%;}</style>
                </div>
                <a class="button button-green join-btn" href="https://link.worldofsteelcraft.tk/smp-save">Join server(Members Only)</a>
		<div class="padding"></div>
    </div>
</div>
{{</html>}}