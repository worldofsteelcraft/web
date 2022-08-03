/* Attention to admins/server management: Change the lines with "Here" comments with their corresponding port or IP when migration between hosts take place*/
jQuery(document).ready(function ( $ ){
	setTimeout(myTimer, 1);
	function myTimer() {
		$('#playergraph').attr('src','https://bedrockinfo.com/data/smp.worldofsteelcraft.tk:25576');  /* Here */
		$.getJSON('https://api.bedrockinfo.com/v2/status?server=smp.worldofsteelcraft.tk&port=25576', function(data) { 
			$('#isonline').empty();
			$('#isoffline-sstemplate-css').empty();
			$('#isoffline-sstemplate-text').empty();
			$('#isofflinecss').empty();
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
			var unixTime= data.CheckTimeStamp;
			var checkTimeStampProcessed = new Date();
			checkTimeStampProcessed.setTime(unixTime * 1000);
			$('#playercount').text(data.Players +'/'+ data.MaxPlayers );
			$('#motd').text(data.ServerName);
			$('#timefetched').text(checkTimeStampProcessed);
			if (data.Online == true) {
				console.log("Data Fetched from API Successfully" + "\n" + "\n" + "Data Processed:" + "\n" + "IP: "+ data.HostName + "\n" + "Port: "+ data.IPv4Port + "\n" + "Online: "+ data.Online + "\n" + "Players: "+ data.Players +'/'+ data.MaxPlayers + "\n" + "Server Version: "+ data.Version + "\n" + "MOTD: "+ data.ServerName + "\n" + "Map Name: "+ data.LevelName + "\n" +"Time Processed: " + checkTimeStampProcessed );}
			else{
				console.log("Data Fetched from API Successfully" + "\n" + "\n" + "Data Processed:" + "\n" +"IP: "+ data.HostName + "\n" + "Port: "+ data.IPv4Port + "\n" + "Online: "+ data.Online + "\n" + "Time Processed: " + checkTimeStampProcessed );
			}
			clearTimeout(myTimer);
		});
	}
	setInterval(myTimer, 300000);
});
