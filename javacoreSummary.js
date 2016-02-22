function getJavacoreSummaryOutline(contents) {
    		
		//window.alert(title + " started.");
		
		var outline = [];
		var lines = contents.split(/\r?\n/);
		var line;
		var i;
		
		//get javacore file name first
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1TIFILENAME/.exec(line)) {//1TIFILENAME    Javacore filename:    /appvol/WP61/WebSphere_Portal/javacore.20160131.191739.17397.0005.txt
                //window.alert("file name: "+ line);
				outline.push({
					label: line.substr(line.indexOf("javacore.")),
					line: i+1  
				});	
				outline.push({
					label: "================================",
					line: i+1  
				});	
				break;					
			}
		}
		
		//get server name
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CICMDLINE /.exec(line)) {//1CICMDLINE     /opt/WebSphere/AppServer/java_1.7_64/bin/java -Declipse.security -Dwas.status.socket=59742 -Dosgi.install.area=/opt/WebSphere/AppServer -Dosgi.configuration.area=/opt/WebSphere/wp_profile/servers/WebSphere_Portal/configuration -Djava.awt.headless=true -Dosgi.framework.extensions=com.ibm.cds,com.ibm.ws.eclipse.adaptors -Xshareclasses:name=webspherev85_1.7_64_%g,nonFatal -Dcom.ibm.xtq.processor.overrideSecureProcessing=true -Xcheck:dump -Xbootclasspath/p:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ibmorb.jar -classpath /opt/WebSphere/wp_profile/properties:/opt/WebSphere/AppServer/properties:/opt/WebSphere/AppServer/lib/startup.jar:/opt/WebSphere/AppServer/lib/bootstrap.jar:/opt/WebSphere/AppServer/lib/jsf-nls.jar:/opt/WebSphere/AppServer/lib/lmproxy.jar:/opt/WebSphere/AppServer/lib/urlprotocols.jar:/opt/WebSphere/AppServer/deploytool/itp/batchboot.jar:/opt/WebSphere/AppServer/deploytool/itp/batch2.jar:/opt/WebSphere/AppServer/java_1.7_64/lib/tools.jar:/opt/WebSphere/PortalServer/base/wp.script/lib/wp.wire.jar -Dorg.osgi.framework.bootdelegation=* -Dibm.websphere.internalClassAccessMode=allow -verbose:gc -Xms2048m -Xmx5120m -Xcompressedrefs -Xscmaxaot4M -Xscmx90M -Dws.ext.dirs=/opt/WebSphere/AppServer/java_1.7_64/lib:/opt/WebSphere/wp_profile/classes:/opt/WebSphere/AppServer/classes:/opt/WebSphere/AppServer/lib:/opt/WebSphere/AppServer/installedChannels:/opt/WebSphere/AppServer/lib/ext:/opt/WebSphere/AppServer/web/help:/opt/WebSphere/AppServer/deploytool/itp/plugins/com.ibm.etools.ejbdeploy/runtime:/opt/WebSphere/PortalServer/shared/ext -Xdump:stack:events=allocation,filter=#10m -Dcom.ibm.itp.location=/opt/WebSphere/AppServer/bin -Djava.util.logging.configureByServer=true -Duser.install.root=/opt/WebSphere/wp_profile -Djava.ext.dirs=/opt/WebSphere/AppServer/tivoli/tam:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ext -Djavax.management.builder.initial=com.ibm.ws.management.PlatformMBeanServerBuilder -Dpython.cachedir=/opt/WebSphere/wp_profile/temp/cachedir -Dwas.install.root=/opt/WebSphere/AppServer -Djava.util.logging.manager=com.ibm.ws.bootstrap.WsLogManager -Dserver.root=/opt/WebSphere/wp_profile -Dcom.ibm.security.jgss.debug=off -Dcom.ibm.security.krb5.Krb5Debug=off -Dcom.ibm.websphere.logging.messageId.version=6 -Dportal.temp.dir=/opt/WebSphere/wp_profile/temp/BSLWSPORTAL1Node/WebSphere_Portal -Dportal.properties.dir=/opt/WebSphere/wp_profile/PortalServer/config -Dcom.ibm.websphere.management.application.client.jspReloadEnabled=false -Dcom.ibm.zipfile.closeinputstreams=true -Dos400.class.path.rawt=2 -Dpzn.root.dir=/opt/WebSphere/AppServer/pzn/config/runtime -Dcom.ibm.ws.cache.CacheConfig.useServerClassLoader=true -Dcom.ibm.ws.cache.CacheConfig.filterLRUInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.filterTimeOutInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.cacheEntryWindow=2 -Dcom.ibm.ws.cache.CacheConfig.cacheInvalidateEntryWindow=2 -Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=300000 -ea -Dderby.system.home=/opt/WebSphere/wp_profile/PortalServer/derby -Dibm.stream.nio=true -Djava.io.tmpdir=/opt/WebSphere/wp_profile/temp -Xgcpolicy:gencon -verbose:gc -Xverbosegclog:/opt/WebSphere/wp_profile/logs/WebSphere_Portal/verbosegc.%Y%m%d.%H%M%S.%pid.txt,20,10000 -javaagent:/opt/WebSphere/AppServerAgent/javaagent.jar -Djava.library.path=/opt/WebSphere/AppServer/lib/native/linux/x86_64/:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64/compressedrefs:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64:/opt/WebSphere/AppServer/bin:/opt/WebSphere/AppServer/nulldllsdir:/usr/lib:/opt/WebSphere/PortalServer/lwo/prereq.odc/shared/app/oiexport: -Djava.endorsed.dirs=/opt/WebSphere/AppServer/endorsed_apis:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/endorsed -Djava.security.auth.login.config=/opt/WebSphere/wp_profile/properties/wsjaas.conf -Djava.security.policy=/opt/WebSphere/wp_profile/properties/server.policy com.ibm.wsspi.bootstrap.WSPreLauncher -nosplash -application com.ibm.ws.bootstrap.WSLauncher com.ibm.ws.runtime.WsServer /opt/WebSphere/wp_profile/config BSLWSDMGRCell01 BSLWSPORTAL1Node WebSphere_Portal
				var serverName = line.split("\\config ").pop();
				outline.push({
					label: "server name: "+ serverName,
					line: i+1  
				});	  
				break;
			}
		}	
		//get signal reason
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/1TISIGINFO/.exec(line)) {//1TISIGINFO     Dump Event "user" (00004000) received
				var dumpReason = String(lines[i].split('(').slice(0,1));//1TISIGINFO     Dump Event "user" 
				outline.push({
					label: dumpReason.substr(dumpReason.indexOf("Dump")),
					line: i+1  
				});
				break;
			}
		}	
		//get java version
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CIJAVAVERSION/.exec(line)) {//1CIJAVAVERSION JRE 1.6.0 Linux amd64-64 build jvmxa6460sr12-20121024_126067 (pxa6460sr12-20121025_01(SR12))
			    lines[i]= String(lines[i]).replace(/\s\s+/g, ' ');//consolidate spaces
				outline.push({
					label: lines[i].substr(lines[i].indexOf(" ")),
					line: i+1  
				});
				break;
			}
		}
		
		//get OS version
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/2XHOSLEVEL/.exec(line)) {//2XHOSLEVEL     OS Level         : Linux 3.0.38-0.5-default
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf(": ")+2),
					line: i+1  
				});
				break;	    				
			}
		}	
		//get #CPU
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/3XHNUMCPUS/.exec(line)) {//3XHNUMCPUS       How Many       : 8
				outline.push({
					//label: match[1],
					label: "CPUs: "+lines[i].substr(lines[i].indexOf(": ")+2),
					line: i+1  
				});
				break;
			}
		}
		//get min heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xms)/.exec(line)) {//2CIUSERARG               -Xms2048m
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		//get max heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xmx)/.exec(line)) {//2CIUSERARG               -Xmx2048m
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		//get noclassgc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xnoclassgc)/.exec(line)) {//2CIUSERARG               -Xnoclassgc
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		//get disableExplicitGc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdisableexplicitgc)/.exec(line)) {//2CIUSERARG               -Xdisableexplicitgc
				outline.push({
					//label: match[1],
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		//get -Xdump
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdump)/.exec(line)) {//2CIUSERARG               -Xdump...
				outline.push({
					label: lines[i].substr(lines[i].indexOf("-X")),
					line: i+1  
				});
				break;
			}
		}
		
		for (i=0; i < lines.length; i++) {
			
			line = lines[i];
	
			if (/1CICPUINFO/.exec(line)) {//1CICPUINFO     Entitled CPU Information
				outline.push({
					label: "~",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("Entitled")),
					line: i+1  
				});
				continue;
			}				
			if (/2CIPHYSCPU/.exec(line)||/2CIONLNCPU/.exec(line)||/2CIBOUNDCPU/.exec(line)||/2CIENTITLECPU/.exec(line)||/2CITARGETCPU/.exec(line)) {//2CIPHYSCPU     Physical CPUs: 6
				outline.push({
					label: lines[i].substr(lines[i].indexOf("CPU  ")),
					line: i+1  
				});
				continue;
			}
			if (/1CIUSERLIMITS/.exec(line)) {//1CIUSERLIMITS  User Limits (in bytes except for NOFILE and NPROC)
 				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("User Limits")),
					line: i+1  
				});
				continue;
			}
			if (/soft limit/.exec(line)) {//NULL           type                            soft limit           hard limit
				outline.push({
					label: "--------------------------------------------------",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("type")),
					line: i+1  
				});
				continue;
			}
			if (/2CIUSERLIMIT/.exec(line)) {//2CIUSERLIMIT   RLIMIT_AS                      18077286400            unlimited
			    var rlimit = String(line.substr(line.indexOf(" RLIMIT")+1));
			    outline.push({
					label: rlimit,
					line: i+1  
				});
				continue;
			}
			if (/NATIVEMEMINFO/.exec(line)) {//0SECTION       NATIVEMEMINFO subcomponent dump routine
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf(" NATIVEMEMINFO")+1),
					line: i+1  
					//TO DO: call NATIVEMEMINFO script
				});
				outline.push({
					label: "-------------------------------------- ",
					line: i+1  
				});
				continue;
			}	
			if (/(MEMUSER\s{7}).+?(allocation)/.exec(line)){//5MEMUSER       |  |  |  +--Direct Byte Buffers: 29,753,776 bytes / 2462 allocations
			    lines[i]=lines[i].replace(/\s\s+/g, ' ');//consolidate spaces 
			    var indexOfFirstSpace = lines[i].indexOf(" ");
			    var indexOfColon = lines[i].indexOf(":");
			    var indexOfBytes = lines[i].indexOf(" bytes");
			    var byteValue=lines[i].substring(indexOfColon+2,indexOfBytes);//grab the byte value consider space after colon
			    byteValue=byteValue.replace(/\,/g,'');//remove commas
			    outline.push({
					label: lines[i].substring(indexOfFirstSpace, indexOfBytes)+"="+(byteValue/1024/1024).toFixed(2) + "mb",
					line: i+1  
				});
			    continue;
			}
			if (/1STHEAPTYPE/.exec(line)||/1STSEGTYPE/.exec(line)) {//1STHEAPTYPE    Object Memory ... 1STHEAPTYPE Object Memory
				var memoryType = String(line).replace(/\s\s+/g, ' ');//remove multiple spaces
				memoryType = memoryType.substr(memoryType.indexOf(" ")+1);//1STHEAPTYPE Object Memory ... Object Memory
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: memoryType,
					line: i+1  
				});
				outline.push({
					label: "-------------",
					line: i+1  
				});
				continue;
			}
			if (/1STHEAPTOTAL/.exec(line)||/1STSEGTOTAL/.exec(line)||/1STSEGINUSE/.exec(line)||/1STSEGFREE/.exec(line)||/1STHEAPINUSE/.exec(line)||/1STHEAPFREE/.exec(line)) {
				//1STSEGTOTAL    Total memory:                    46759936 (0x0000000002C98000)
				//or 
				//1STHEAPFREE    Bytes of Heap Space Free: 8cfa600
				var memory = String(lines[i]).replace(/\s\s+/g, ' ');//consolidate spaces
				var reAllNumbersFoundInTheString = /\b\d+\b/g;//regular expression to get all the numbers from a string
				if (/\(/.exec(memory)){
					memory = / (.*?)( \()/.exec(memory);//everything between the first space and the first parenthesis
					memory = memory[1]  + " = " + decToMb(reAllNumbersFoundInTheString.exec(lines[i]));//since the memory value is the first number in this string
				}else{
					var decValue = hexToDec(memory.substr(memory.indexOf(":")).trim());
					memory = memory.substr(0, memory.indexOf(":")+ 1) + "=" + decToMb(decValue) ;	
				}
				
				outline.push({
					label: memory,
					line: i+1  
				});
				continue;
			}
			if (/2LKPOOLTOTAL/.exec(line)) {//2LKPOOLTOTAL     Current total number of monitors: 2390
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: lines[i].substr(lines[i].indexOf("Current")),
					line: i+1  
				});
				continue;
			}
			if (/1XMCURTHDINFO/.exec(line)) {//1XMCURTHDINFO  Current thread
				outline.push({
					label: " ",
					line: i+1  
				});
				outline.push({
					label: "Current Thread",
					line: i+1  
				});
				outline.push({
					label: "------------------------",
					line: i+1  
				});
				while (/^NULL /.exec(line)==null){//get stack trace of current thread
					var currentThread= String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
					if (/STACKTRACE /.exec(line)|| /3XMTHREADINFO /.exec(line)){
						outline.push({
							label: currentThread.substr(currentThread.indexOf(" ")),
							line: i+1  
						});
					}
					line = lines[i++];
				}
				continue;
			}

		}//end of contents loop
		return outline;
	}
	
	
	
function getJavacoreSummaryText(text){
		var summary = [];
		var lines = text.split(/\r?\n/);
		var line;
		var i;
		//get javacore file name first
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1TIFILENAME/.exec(line)) {//1TIFILENAME    Javacore filename:    /appvol/WP61/WebSphere_Portal/javacore.20160131.191739.17397.0005.txt
                summary+=("\n"+	line.substr(line.indexOf("javacore.")));	
				summary+=("\n================================");	
				break;					
			}
		}
		//get server name
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CICMDLINE /.exec(line)) {//1CICMDLINE     /opt/WebSphere/AppServer/java_1.7_64/bin/java -Declipse.security -Dwas.status.socket=59742 -Dosgi.install.area=/opt/WebSphere/AppServer -Dosgi.configuration.area=/opt/WebSphere/wp_profile/servers/WebSphere_Portal/configuration -Djava.awt.headless=true -Dosgi.framework.extensions=com.ibm.cds,com.ibm.ws.eclipse.adaptors -Xshareclasses:name=webspherev85_1.7_64_%g,nonFatal -Dcom.ibm.xtq.processor.overrideSecureProcessing=true -Xcheck:dump -Xbootclasspath/p:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ibmorb.jar -classpath /opt/WebSphere/wp_profile/properties:/opt/WebSphere/AppServer/properties:/opt/WebSphere/AppServer/lib/startup.jar:/opt/WebSphere/AppServer/lib/bootstrap.jar:/opt/WebSphere/AppServer/lib/jsf-nls.jar:/opt/WebSphere/AppServer/lib/lmproxy.jar:/opt/WebSphere/AppServer/lib/urlprotocols.jar:/opt/WebSphere/AppServer/deploytool/itp/batchboot.jar:/opt/WebSphere/AppServer/deploytool/itp/batch2.jar:/opt/WebSphere/AppServer/java_1.7_64/lib/tools.jar:/opt/WebSphere/PortalServer/base/wp.script/lib/wp.wire.jar -Dorg.osgi.framework.bootdelegation=* -Dibm.websphere.internalClassAccessMode=allow -verbose:gc -Xms2048m -Xmx5120m -Xcompressedrefs -Xscmaxaot4M -Xscmx90M -Dws.ext.dirs=/opt/WebSphere/AppServer/java_1.7_64/lib:/opt/WebSphere/wp_profile/classes:/opt/WebSphere/AppServer/classes:/opt/WebSphere/AppServer/lib:/opt/WebSphere/AppServer/installedChannels:/opt/WebSphere/AppServer/lib/ext:/opt/WebSphere/AppServer/web/help:/opt/WebSphere/AppServer/deploytool/itp/plugins/com.ibm.etools.ejbdeploy/runtime:/opt/WebSphere/PortalServer/shared/ext -Xdump:stack:events=allocation,filter=#10m -Dcom.ibm.itp.location=/opt/WebSphere/AppServer/bin -Djava.util.logging.configureByServer=true -Duser.install.root=/opt/WebSphere/wp_profile -Djava.ext.dirs=/opt/WebSphere/AppServer/tivoli/tam:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/ext -Djavax.management.builder.initial=com.ibm.ws.management.PlatformMBeanServerBuilder -Dpython.cachedir=/opt/WebSphere/wp_profile/temp/cachedir -Dwas.install.root=/opt/WebSphere/AppServer -Djava.util.logging.manager=com.ibm.ws.bootstrap.WsLogManager -Dserver.root=/opt/WebSphere/wp_profile -Dcom.ibm.security.jgss.debug=off -Dcom.ibm.security.krb5.Krb5Debug=off -Dcom.ibm.websphere.logging.messageId.version=6 -Dportal.temp.dir=/opt/WebSphere/wp_profile/temp/BSLWSPORTAL1Node/WebSphere_Portal -Dportal.properties.dir=/opt/WebSphere/wp_profile/PortalServer/config -Dcom.ibm.websphere.management.application.client.jspReloadEnabled=false -Dcom.ibm.zipfile.closeinputstreams=true -Dos400.class.path.rawt=2 -Dpzn.root.dir=/opt/WebSphere/AppServer/pzn/config/runtime -Dcom.ibm.ws.cache.CacheConfig.useServerClassLoader=true -Dcom.ibm.ws.cache.CacheConfig.filterLRUInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.filterTimeOutInvalidation=true -Dcom.ibm.ws.cache.CacheConfig.cacheEntryWindow=2 -Dcom.ibm.ws.cache.CacheConfig.cacheInvalidateEntryWindow=2 -Dcom.ibm.websphere.alarmthreadmonitor.threshold.millis=300000 -ea -Dderby.system.home=/opt/WebSphere/wp_profile/PortalServer/derby -Dibm.stream.nio=true -Djava.io.tmpdir=/opt/WebSphere/wp_profile/temp -Xgcpolicy:gencon -verbose:gc -Xverbosegclog:/opt/WebSphere/wp_profile/logs/WebSphere_Portal/verbosegc.%Y%m%d.%H%M%S.%pid.txt,20,10000 -javaagent:/opt/WebSphere/AppServerAgent/javaagent.jar -Djava.library.path=/opt/WebSphere/AppServer/lib/native/linux/x86_64/:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64/compressedrefs:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/amd64:/opt/WebSphere/AppServer/bin:/opt/WebSphere/AppServer/nulldllsdir:/usr/lib:/opt/WebSphere/PortalServer/lwo/prereq.odc/shared/app/oiexport: -Djava.endorsed.dirs=/opt/WebSphere/AppServer/endorsed_apis:/opt/WebSphere/AppServer/java_1.7_64/jre/lib/endorsed -Djava.security.auth.login.config=/opt/WebSphere/wp_profile/properties/wsjaas.conf -Djava.security.policy=/opt/WebSphere/wp_profile/properties/server.policy com.ibm.wsspi.bootstrap.WSPreLauncher -nosplash -application com.ibm.ws.bootstrap.WSLauncher com.ibm.ws.runtime.WsServer /opt/WebSphere/wp_profile/config BSLWSDMGRCell01 BSLWSPORTAL1Node WebSphere_Portal
				var serverName = line.split("\\config ").pop();
				summary+=("\n"+"server name: "+ serverName);	  
				break;
			}
		}	
		//get signal reason
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/1TISIGINFO/.exec(line)) {//1TISIGINFO     Dump Event "user" (00004000) received
				var dumpReason = String(lines[i].split('(').slice(0,1));//1TISIGINFO     Dump Event "user" 
				summary+=("\n"+	dumpReason.substr(dumpReason.indexOf("Dump")));
				break;
			}
		}	
		//get java version
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CIJAVAVERSION/.exec(line)) {//1CIJAVAVERSION JRE 1.6.0 Linux amd64-64 build jvmxa6460sr12-20121024_126067 (pxa6460sr12-20121025_01(SR12))
				lines[i] = String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
				summary+=("\n"+	lines[i].substring(lines[i].indexOf(" ")+1));
				break;
			}
		}
		//get OS version
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/2XHOSLEVEL/.exec(line)) {//2XHOSLEVEL     OS Level         : Linux 3.0.38-0.5-default
				summary+=("\n"+	lines[i].substr(lines[i].indexOf(": ")+2));
				break;	    				
			}
		}	
		//get #CPU
		for (i=0; i < lines.length; i++) {
			line = lines[i];	
			if (/3XHNUMCPUS/.exec(line)) {//3XHNUMCPUS       How Many       : 8
				summary+=("\nCPUs: "+lines[i].substr(lines[i].indexOf(": ")+2));
				break;
			}
		}
		//get min heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xms)/.exec(line)) {//2CIUSERARG               -Xms2048m
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get max heap
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xmx)/.exec(line)) {//2CIUSERARG               -Xmx2048m
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get noclassgc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xnoclassgc)/.exec(line)) {//2CIUSERARG               -Xnoclassgc
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get disableExplicitGc
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdisableexplicitgc)/.exec(line)) {//2CIUSERARG               -Xdisableexplicitgc
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X")));
				break;
			}
		}
		//get -Xdump
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/(2CIUSERARG).+?(\-Xdump)/.exec(line)) {//2CIUSERARG               -Xdump...
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("-X"))	);
				break;
			}
		}
		for (i=0; i < lines.length; i++) {
			line = lines[i];
			if (/1CICPUINFO/.exec(line)) {//1CICPUINFO     Entitled CPU Information
				summary+=("\n~");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("Entitled")));
				continue;
			}				
			if (/2CIPHYSCPU/.exec(line)||/2CIONLNCPU/.exec(line)||/2CIBOUNDCPU/.exec(line)||/2CIENTITLECPU/.exec(line)||/2CITARGETCPU/.exec(line)) {//2CIPHYSCPU     Physical CPUs: 6
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("CPU  ")));
				continue;
			}
			if (/1CIUSERLIMITS/.exec(line)) {//1CIUSERLIMITS  User Limits (in bytes except for NOFILE and NPROC)
 				summary+=("\n");
				summary+=("\n"+lines[i].substr(lines[i].indexOf("User Limits")));
				continue;
			}
			if (/soft limit/.exec(line)) {//NULL           type                            soft limit           hard limit
				summary+=("\n--------------------------------------------------");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("type")));
				continue;
			}
			if (/2CIUSERLIMIT/.exec(line)) {//2CIUSERLIMIT   RLIMIT_AS                      18077286400            unlimited
			    var rlimit = String(line.substr(line.indexOf(" RLIMIT")+1));
			    summary+=("\n"+	rlimit);
				continue;
			}
			if (/NATIVEMEMINFO/.exec(line)) {//0SECTION       NATIVEMEMINFO subcomponent dump routine
				summary+=("\n");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf(" NATIVEMEMINFO")+1));
				summary+=("\n--------------------------------------\n");
				continue;
			}	
			if (/(MEMUSER\s{7}).+?(allocation)/.exec(line)){//5MEMUSER       |  |  |  +--Direct Byte Buffers: 29,753,776 bytes / 2462 allocations
			    lines[i]=lines[i].replace(/\s\s+/g, ' ');//consolidate spaces 
			    var indexOfFirstSpace = lines[i].indexOf(" ");
			    var indexOfColon = lines[i].indexOf(":");
			    var indexOfBytes = lines[i].indexOf(" bytes");
			    var byteValue=lines[i].substring(indexOfColon+2,indexOfBytes);//grab the byte value consider space after colon
			    byteValue=byteValue.replace(/\,/g,'');//remove commas
			    summary+=(lines[i].substring(indexOfFirstSpace, indexOfBytes)+"="+(byteValue/1024/1024).toFixed(2) + "mb\n");
			    continue;
			}
			if (/1STHEAPTYPE/.exec(line)||/1STSEGTYPE/.exec(line)) {//1STHEAPTYPE    Object Memory ... 1STHEAPTYPE Object Memory
				var memoryType = String(line).replace(/\s\s+/g, ' ');//remove multiple spaces
				memoryType = memoryType.substr(memoryType.indexOf(" ")+1);//1STHEAPTYPE Object Memory ... Object Memory
				summary+=("\n");
				summary+=("\n"+	memoryType);
				summary+=("\n-------------");
				continue;
			}
			if (/1STHEAPTOTAL/.exec(line)||/1STSEGTOTAL/.exec(line)||/1STSEGINUSE/.exec(line)||/1STSEGFREE/.exec(line)||/1STHEAPINUSE/.exec(line)||/1STHEAPFREE/.exec(line)) {
				//1STSEGTOTAL    Total memory:                    46759936 (0x0000000002C98000)
				//or 
				//1STHEAPFREE    Bytes of Heap Space Free: 8cfa600
				var memory = String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
				if (/\(/.exec(memory)){
					memory = / (.*?)( \()/.exec(memory);//everything between the first space and the first parenthesis
					var reAllNumbersFoundInTheString = /\b\d+\b/g;//regular expression to get all the numbers from a string
					memory = memory[1]  + " = " + decToMb(reAllNumbersFoundInTheString.exec(lines[i]));//since the memory value is the first number in this string	
				}else{
					var decValue = hexToDec(memory.substr(memory.indexOf(":")).trim());
					memory = memory.substr(0, memory.indexOf(":")+ 1) + "=" + decToMb(decValue) ;	
					}
				
				summary+=("\n"+	memory);
				continue;
			}
			if (/2LKPOOLTOTAL/.exec(line)) {//2LKPOOLTOTAL     Current total number of monitors: 2390
				summary+=("\n");
				summary+=("\n"+	lines[i].substr(lines[i].indexOf("Current")));
				continue;
			}
			if (/1XMCURTHDINFO/.exec(line)) {//1XMCURTHDINFO  Current thread
				summary+=("\n\nCurrent Thread\n--------------------");
				while (/^NULL /.exec(line)==null){
					var currentThread= String(lines[i]).replace(/\s\s+/g, ' ');//remove extra spaces
					if (/STACKTRACE /.exec(line)|| /3XMTHREADINFO /.exec(line)){
						summary+="\n"+currentThread.substr(currentThread.indexOf(" ")) ;						
					}
					line = lines[i++];
				}
				continue;
			}
		}//end of contents loop
		return summary;
}	

		
function decToMb(dec){
	dec = parseFloat(dec);
	return (dec/1024/1024).toFixed(2)+"MB";
}

function hexToDec(hex){
	return parseInt(hex, 16);
}
