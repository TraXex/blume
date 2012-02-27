/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

//		tooltips[0]=["red_balloon.gif", "Here is a red balloon<br /> on a white background", {background:"#FFFFFF", color:"black", border:"5px ridge darkblue"}]
//		tooltips[1]=["duck2.gif", "Here is a duck on a light blue background.", {background:"#DDECFF", width:"200px"}]
//		tooltips[2]=["../dynamicindex14/winter.jpg"]
		tooltips[1]=["../img/blank.gif", "(Bangalore / Mobile Advertising) InMobi has grown to become the world's largest independent ad network serving over 100 Billion mobile ads (as of Dec 2010).", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[2]=["../img/blank.gif", "(Hyderabad / Mobile Video) Apalya Technologies is India's leading white-label content aggregation, provisioning and distribution platform in the Mobile Video Delivery space.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[3]=["../img/blank.gif", "(Pune / Enterprise Software) Algorhythm is a one stop shop for all your Supply Chain Needs; Enhanced life cycle and lower costs of ownership over the years. Unique combination of domain knowledge and technology", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[4]=["../img/blank.gif", "(Mumbai / Vocational training) Speakwell is a professionally managed training Firm engaged in personality development & effective communication training. Speakwell Institute conducts industry relevant job oriented courses and offers placement to the participants. More than 1,00,000 students have been groomed and trained by Speakwell Institute for Personal Development and Spoken English.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[5]=["../img/blank.gif", "(Delhi NCR / Mobile applications) Mobiquest™ is a mobile Enterprise Platform Company. The company uses the SAAS model to provide the customers with mobile based enterprise business automation applications. The company has created more than 50 mobile applications across many Industries. It also runs M'Loyal - one of India's leading platforms for Mobile Loyalty Solutions.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		
		tooltips[6]=["../img/blank.gif", "(Mumbai / Mobile applications) Onward Mobility focuses on developing cutting-edge,never-seen-before software for mobile phones. Software that transforms phones into something altogether different, giving them abilities they never had before - they like to call them Mobile mutations.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[7]=["../img/blank.gif", "(Bangalore / Enterprise Software) Insta is a provider of hospital management software - a comprehensive system for managing all aspects of hospital operations and management", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[8]=["../img/blank.gif", "(Bangalore / Pharma Services) Asiatic Clinical Research is a full service contract research organization (CRO) aka Clinical Research Outsourcing, with a focus on phase II - IV trials.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[9]=["../img/blank.gif", "(Bangalore / Skills Training) TalentBridge is a social enterprise aiming to bridge the industry-academia gap in 2 steps - collaborating with industry and colleges,attempting to bring holistic change management in Curriculum, Pedagogy, Institutional Processes, Targeted Skill Development as well as partnering with corporates, helping them find good employees by conducting Orientation, Training and Mentoring for students with corporate inputs", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[11]=["../img/blank.gif", "(Mumbai / Pharma + Information Services) AIOCD Pharmasofttech AWACS Pvt. Ltd. is a pharmaceutical market research company formed by All Indian Origin Chemists & Distributors Ltd. (AIOCD Ltd) in a joint venture with Trikaal Mediinfotech Pvt. Ltd.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]

		tooltips[12]=["../img/blank.gif", "(Chennai / Online Travel) www.atyourprice.in is a market place where price conscious flexible consumers can buy airline tickets/hotels at the price that they are willing to pay and Vendors can dispose of unsold inventory at prices lower than the published price. This is a win-win situation for both Consumers and Vendors.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[13]=["../img/blank.gif", "(Jaipur / Education Services) DEXL is an initiative of a group of academicians having a very long teaching experience at undergraduate to post-graduate level apart from IIT-JEE coaching at various institutes of repute. This group has taught thousands of students who qualified for the IIT JEE with top ranks in the last 10 years.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[14]=["../img/blank.gif", "(Bangalore / Imaging Technology)The core of Serial Innovations’ technology and solutions is real-time imaging and vision driven analytics. Their image processing technology is designed to be versatile across a range of diverse applications. The sophistication of the technology lies not just in the fundamental algorithms but the ability to adapt these algorithms to price sensitive applications such as retail and signage, and small foot-print platforms including low power embedded devices.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		tooltips[15]=["../img/blank.gif", "(Mumbai / Microfinance) Svasti is a microfinance company that is working to make credit and other financial services easily accessible to the low income population in slum communities in Mumbai.(The website would be www.svasti.in. The site is under development and should be live by the end of the month.)", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		
		tooltips[16]=["../img/blank.gif", "(Bhubaneshwar / Dairy Produce Supply Chain) Milk Mantra is today’s dairy company – its today’s mantra for good nutrition, innovative dairy products and delivery mechanisms, and an honest effort to sustainably enhance rural lives.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		
		tooltips[17]=["../img/blank.gif", "(Chennai / Fresh Produce Supply Chain) efarm is India's first end-to-end agri supply chain platform , providing a combination of technology solutions and on-ground distribution mechanism to enable farmers reach end markets in an effective manner.", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]
		

		tooltips[10]=["../img/blank.gif", "(Bangalore / Aerospace) Earth2Orbit is a pioneer in the space industry focussed entirely on the pursuit of products and services that aid in satellite launches as well as other areas of space exploration", {background:"white", font:"12px Arial",border:"2px solid red",width:"300px"}]



		
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")