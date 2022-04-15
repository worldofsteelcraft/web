

jQuery(document).ready(function( $ ){
	$.getJSON('https://api.bedrockinfo.com/v2/status?server=smp.worldofsteelcraft.tk&port=25609', function(data) {      
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
		 };
		$('#playercount').text(data.Players +'/'+ data.MaxPlayers );
		$('#motd').text(data.ServerName);
	});
});
