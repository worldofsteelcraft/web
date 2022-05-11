jQuery(document).ready(function( $ ){
	$.getJSON('https://api.bedrockinfo.com/v2/status?server=smp.worldofsteelcraft.tk&port=25576', function(data) {      
		$('#hostname').text(data.HostName);
		$('#port').text(data.IPv4Port);
		$('#version').text(data.Version);
		$('#mapname').text(data.LevelName); 
		if (data.Online == true) {
			$('#isonline').append('<img src="/images/serveronline.png" width="12px"><span>Online</span>');
			}
		else {
			$('#isonline').append('<img src="/images/serveroffline.png" width="12px"><span>Offline</span>');
			$('#isofflinecss').append('<style>tr.ping-disable-when-offline{display:none;}</style>');
			$('#isoffline-sstemplate-css').append('<style>.serverstatus-sstemplate-content{display:none;}</style>');
			$('#isoffline-sstemplate-text').append('<p><b>Server is offline, please check for maintenance notice.</b></p>');
		 };
		$('#playercount').text(data.Players +'/'+ data.MaxPlayers );
		$('#motd').text(data.ServerName);
	});
	$('#playergraph').attr('src','https://bedrockinfo.com/data/smp.worldofsteelcraft.tk:25576');
});
