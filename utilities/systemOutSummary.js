function getSystemOutSummary(contents) {
	var systemOutOutline = [];
	var lines = contents.split("\n");
	var condensedString = "";

	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		
		if (/^WebSphere/.exec(line)) {//WebSphere Platform 8.0.0.9 [ND 8.0.0.9 cf091421.02][BPMSTD 8.0.1.3 20140814-155433] running with process name x2pbpmCell\x1pbpm234ManagedNode\AppTarget_D_1 and process id 11929
			var pid = /process id (\w+)/.exec(line)[1];
			systemOutOutline.push({
				label: "PID:" + pid + " " + lines[i],
				line: i + 1
			});
			continue;
		}
		
		if (/TRAS0017I/.exec(line)) {//[4/29/15 6:56:09:650 EDT] 00000000 ManagerAdmin I TRAS0017I: The startup trace state is *=info.
			condensedString = timeStamp(line) + " " + infoMessageCode(line) + " " + traceString(line);
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if (/WSVR0001I/.exec(line) || /WSVR0024I/.exec(line) || /WSVR0221I/.exec(line) || /WSVR0217I/.exec(line) || /ADMN1020I/.exec(line)) {
			condensedString = timeStamp(line) + " " + adminMessageCode(line) + line.split(':').pop();
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if ((/WSVR0605W/.exec(line)) || (/CWWSR0605W/.exec(line))) {
			//[1/26/16 9:22:16:909 NZDT] 0003ebfb ThreadMonitor W   WSVR0605W: Thread "WebContainer : 364" (0003b646) has been active for 1036363 milliseconds and may be hung.  There is/are 1 thread(s) in total in the server that may be hung.
			condensedString = timeStamp(line) + " " + warningMessageCode(line) + " " + threadName(line) + " hung? Delay: " + msToTime(ms(line));
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if (/HMGR0152W/.exec(line)) {
			//[10/25/05 16:42:27:635 EDT] 0000047a CoordinatorCo W HMGR0152W: CPU Starvation detected. Current thread scheduling delay is 9 seconds.
			condensedString = timeStamp(line) + " " + warningMessageCode(line) + " starvation? Delay: " + /delay is (.+?)\./.exec(line)[1];
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}

		if (/CWOBJ7852W/.exec(line)) {
			//[10/9/13 23:14:05:147 CDT] 0000000f XSThreadPool  W   CWOBJ7852W: Thread starvation detected.  Thread scheduling delay is 34377 ms. ;
			condensedString = timeStamp(line) + " " + warningMessageCode(line) + " starvation? Delay: " + msToTime(delayIsTime(line));
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if (/UTLS0008W/.exec(line)) {
			//[7/12/13 18:14:38:494 IST] 00000072 AlarmThreadMo W   UTLS0008W: The return of alarm thread "Deferrable Alarm : 3" (00000048) to the alarm thread pool has been delayed for 10496 milliseconds. This may be preventing normal alarm function within the application server. The alarm listener stack trace is as follows:
			condensedString = timeStamp(line) + " " + warningMessageCode(line) + threadName(line) + " Delay: " + msToTime(delayedForTime(line));
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if ((/WSVR0606W/.exec(line)) || (/UTLS0009W/.exec(line)) || (/CWWSR0606W/.exec(line))) {
			//[8/13/12 12:37:10:053 PDT] 0000003e AlarmThreadMo W UTLS0009W: Alarm Thread "Non-deferrable Alarm : 0" (0000003e) previously reported to be delayed has now completed.  It was active for approximately 43734 milliseconds.
			condensedString = timeStamp(line) + " " + warningMessageCode(line) + " " + threadName(line) + " completed. Active: " + ms(line);
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if (/DCSV0004W/.exec(line)) {
			//[10/25/05 16:42:27:635 EDT] 0000047a CoordinatorCo W DCSV0004W: DCS Stack DefaultCoreGroup at Member PCCell01\PCNode01\BPM751PDEV.AppTarget.PCMNode01.0: Did not receive adequate CPU time slice. Last known CPU usage time at 12:23:55:452 CST. Inactivity duration was 31 seconds.
			condensedString = timeStamp(line) + " " + warningMessageCode(line) + " Inactivity: " + durationWasTime(line) + " seconds";
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}
		
		if (/Too many open files/i.exec(line)) {
			//[4/29/15 6:56:09:650 EDT] 00000000 ManagerAdmin I TRAS0017I: The startup trace state is *=info.
			condensedString = timeStamp(line) + " Too many open files";
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}

		if (/OutOfMemory/i.exec(line)) {
			//[4/29/15 6:56:09:650 EDT] 00000000 ManagerAdmin I TRAS0017I: The startup trace state is *=info.
			condensedString = timeStamp(line) + " OutOfMemory";
			systemOutOutline.push({
				label: condensedString, //lines[i],
				line: i + 1
			});
			continue;
		}

		
		


	} //end of list loop


	function timeStamp(line) {
		return /^\[.+?\]/.exec(line);	
	}

	function infoMessageCode(line) {
		return /^.+?\sI\s(\w+)\:/.exec(line)[1];
	}

	function traceString(line) { //[4/29/15 6:56:09:650 EDT] 00000000 ManagerAdmin I TRAS0017I: The startup trace state is *=info.
		return line.split(':').pop();
	}

	function warningMessageCode(line) { //[1/26/16 9:22:16:909 NZDT] 0003ebfb ThreadMonitor W   WSVR0605W: Thread "WebContainer : 364" (0003b646) has been active for 1036363 milliseconds and may be hung.  There is/are 1 thread(s) in total in the server that may be hung.	
		return /\sW\s+(\w+)\:/.exec(line)[1];
	}

	function adminMessageCode(line) { //[11/22/14 21:46:01:558 IST] 00000053 AdminHelper A ADMN1020I: An attempt is made to stop the server1 server. (User ID = defaultWIMFileBasedRealm/estore)
		return /\sA\s+(\w+)\:/.exec(line)[1];
	}

	function ms(line) { //[1/26/16 9:22:16:909 NZDT] 0003ebfb ThreadMonitor W   WSVR0605W: Thread "WebContainer : 364" (0003b646) has been active for 1036363 milliseconds and may be hung.  There is/are 1 thread(s) in total in the server that may be hung.
		return /\s(\w+)\smilliseconds/.exec(line)[1];
	}

	function msToTime(ms) {
		//window.alert("ms: " + ms);
		var fms = parseFloat(ms);
		//parseFloat(Math.round(num3 * 100) / 100).toFixed(2);
		var s = parseFloat((fms / 1000) % 60).toFixed(2);
		//window.alert("s: " + s);
		//var m = (ms / (1000 * 60)) % 60;
		var m = parseFloat((fms / (1000 * 60)) % 60).toFixed(0);
		//var h = (ms / (1000 * 60 * 60)) % 24;
		var h = parseFloat((fms / (1000 * 60 * 60)) % 24).toFixed(0);
		return "(" + h + "h:" + m + "m:" + s + "s)";
		//return s;
	}

	function threadName(line) { //[1/26/16 9:22:16:909 NZDT] 0003ebfb ThreadMonitor W   WSVR0605W: Thread "WebContainer : 364" (0003b646) has been active for 1036363 milliseconds and may be hung.  There is/are 1 thread(s) in total in the server that may be hung.
		return /\"(.+?)\"/.exec(line)[1];
	}

	function delayedForTime(line){
		return /delayed for (\w+) /.exec(line)[1];
	}
	
    function delayIsTime(line){
		return /delay is (\w+) /.exec(line)[1];
	}

    function durationWasTime(line){
		return /duration was (\w+) /.exec(line)[1];
	}


	return systemOutOutline;

}



		//TRAS0017I #trace [4/29/15 6:56:09:650 EDT] 00000000 ManagerAdmin I TRAS0017I: The startup trace state is *=info.
		//WSVR0605W #hung [1/26/16 9:22:16:909 NZDT] 0003ebfb ThreadMonitor W   WSVR0605W: Thread "WebContainer : 364" (0003b646) has been active for 1036363 milliseconds and may be hung.  There is/are 1 thread(s) in total in the server that may be hung.
		//CWWSR0605W #hung
		//UTLS0008W #delayed  [7/12/13 18:14:38:494 IST] 00000072 AlarmThreadMo W   UTLS0008W: The return of alarm thread "Deferrable Alarm : 3" (00000048) to the alarm thread pool has been delayed for 10496 milliseconds. This may be preventing normal alarm function within the application server. The alarm listener stack trace is as follows:
		//WSVR0606W #completed
		//UTLS0009W #completed  [8/13/12 12:37:10:053 PDT] 0000003e AlarmThreadMo W UTLS0009W: Alarm Thread "Non-deferrable Alarm : 0" (0000003e) previously reported to be delayed has now completed.  It was active for approximately 43734 milliseconds.
		//CWWSR0606W #completed
		//WSVR0001I #open for e-business [9/15/11 8:42:11:727 CDT] 00000000 WsServerImpl A WSVR0001I: Server server1 open for e-business
		//WSVR0024I #server stopped [12/22/11 6:01:49:033 CST] 00000006 ServerCollabo A WSVR0024I: Server server1 stopped
		//WSVR0221I #app start  [12/22/11 6:01:49:033 CST] 00000006 ApplicationMg A WSVR0221I: Application started: [application_name]
		//WSVR0217I #app stopping [12/22/11 6:01:47:205 CST] 00000006 ApplicationMg A WSVR0217I: Stopping application: isclite
		//ADMN1020I #attempt stop [11/22/14 21:46:01:558 IST] 00000053 AdminHelper A ADMN1020I: An attempt is made to stop the server1 server. (User ID = defaultWIMFileBasedRealm/estore)
		//HMGR0152W #cpu starvation [10/25/05 16:42:27:635 EDT] 0000047a CoordinatorCo W HMGR0152W: CPU Starvation detected. Current thread scheduling delay is 9 seconds.
		//DCSV0004W #adequate CPU [10/25/05 16:42:27:635 EDT] 0000047a CoordinatorCo W DCSV0004W: DCS Stack DefaultCoreGroup at Member PCCell01\PCNode01\BPM751PDEV.AppTarget.PCMNode01.0: Did not receive adequate CPU time slice. Last known CPU usage time at 12:23:55:452 CST. Inactivity duration was 31 seconds.
		//CWOBJ7852W #Thread starvation detected [10/9/13 23:14:05:147 CDT] 0000000f XSThreadPool  W   CWOBJ7852W: Thread starvation detected.  Thread scheduling delay is 34377 ms. 
		//Too many open files/)
		//OutOfMemory
		
					//[9/15/11 8:42:11:727 CDT] 00000000 WsServerImpl A WSVR0001I: Server server1 open for e-business
			//[12/22/11 6:01:49:033 CST] 00000006 ServerCollabo A WSVR0024I: Server server1 stopped
			//[12/22/11 6:01:49:033 CST] 00000006 ApplicationMg A WSVR0221I: Application started: [application_name]
			//[12/22/11 6:01:47:205 CST] 00000006 ApplicationMg A WSVR0217I: Stopping application: isclite
			//[11/22/14 21:46:01:558 IST] 00000053 AdminHelper A ADMN1020I: An attempt is made to stop the server1 server. (User ID = defaultWIMFileBasedRealm/estore)
