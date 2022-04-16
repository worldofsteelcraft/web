---
title: "SMP Server"
date: 2022-01-13T10:34:50+08:00
draft: false
description: "Check the WoSC SMP Server Status here!"
---
<script src="/scripts/smp-query.js"></script>
<style>
    body{
	background: rgb(52,153,69);
	background: -moz-linear-gradient(131deg, rgba(52,153,69,1) 45%, rgba(85,85,255,1) 100%);
	background: -webkit-linear-gradient(131deg, rgba(52,153,69,1) 45%, rgba(85,85,255,1) 100%);
	background: linear-gradient(131deg, rgba(52,153,69,1) 45%, rgba(85,85,255,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#349945",endColorstr="#5555FF",GradientType=1);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index:-2;
}
</style>
<div class="serverstatus pagetitle">
    <img src="/images/logo.png" class="style-exclude" width="150px">    
                <noscript>This service won't work until you enable Javascript, Please Enable it</noscript>
                    <div class="serverstatuspanel">
                    <table>
                        <tbody><tr><th>Server IP Address</th><td><span id="hostname">Loading... </span></td></tr>
                        <tr><th>Server Port</th><td><span id="port">Loading...</span></td></tr>
                        <tr><th>Status</th><td><div id="isonline"></div></td></tr>
                         <tr class="ping-disable-when-offline"><th>MOTD</th><td><span id="motd">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Version Running</th><td><span id="version">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Players</th><td><span id="playercount">Loading...</span></td></tr>
                        <tr class="ping-disable-when-offline"><th>Map Name</th><td><span id="mapname">Loading...</span></td></tr>
                        </tbody>
                    </table>
                    <button type="button" class="collapsible collapsible-notbig collapsible-fullwidth">Player Graph (Not Available)</button>
                    <div class="content" style="display: none;">
                        <p>See?</p>
			        </div>
                    <div id="isofflinecss"></div>
                    <style>div.serverstatuspanel{width:100%;}</style>
                </div>
                <a class="button button-green join-btn" href="https://link.worldofsteelcraft.tk/smp-save">Join server(Members Only)</a>
		<div class="padding"></div>
    </div>
</div>
