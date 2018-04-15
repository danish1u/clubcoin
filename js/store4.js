jQuery(document).ready(function(){
	var $V = jQuery.noConflict();		
	$V(".pagecontainer > table:eq(1)").addClass("pst-background");
	$V(".pagecontainer > table:eq(1) tr:first td:first").addClass("pst-background2");
	$V(".pst-background > tbody > tr > td > table:last-child").addClass("addfooter");
	$V(".pst-background table:eq(1) tbody:first").addClass("row1");
	$V(".pst-background table:eq(1) tr:first").addClass("nospace1");
	$V(".pst-background table:eq(1) tr:eq(1)").addClass("pst-content1 row1");
	$V(".pst-background table:eq(1) tr:eq(1) td:first").addClass("1col-md-3 1col-sm-3 1col-xs-12");
	$V(".pst-content > td:eq(1)").addClass("1pst-gap");
	$V(".pst-content > td:eq(2)").addClass("1categorypage 1col-md-91 col-sm-9 1col-xs-12");
	
	if(pageName != "StoresCustomPageHome") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	
	
	//Getting and Setting Store Categories
	
	
	//Footer
	var d = new Date();
	var footer = '\n\r<div class="footer"> <div class="ner"> <div class="row"> <div class="col-md-4"> <div class="browse-logos1"> <h3 class="coldstora1">Category</h3> <div class="browse-logos"> <ul class="coldstora2"> <li class="coldstora3"> <a href="https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=coldstoragecoins&ftab=AllFeedback">Bitcoin</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/become-a-dilleraffiliate/_i.html?">Bitcoin Cash</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/about-us/_i.html?">BitClub Network</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/faq/_i.html?">Litecoin</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/contacts-us/_i.html?">Ethereum</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/payments-and-shipping/_i.html?">ClubCoin</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/payments-and-shipping/_i.html?">CryptoRuble</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/payments-and-shipping/_i.html?">Dash</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/payments-and-shipping/_i.html?">Dealer Starter Pack</a> </li></ul> </div></div></div><div class="col-md-4"> <div class="browse-logos1"> <h3 class="coldstora1">Store Pages</h3> <div class="browse-logos"> <ul class="coldstora2"> <li class="coldstora3"> <a href="https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=coldstoragecoins&ftab=AllFeedback">Feedback</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/become-a-dilleraffiliate/_i.html?">Become a diller/affiliate</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/about-us/_i.html?">About us</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/faq/_i.html?">FAQ</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/contacts-us/_i.html?">Contact Us</a> </li><li class="coldstora3"> <a href="http://stores.ebay.com/coldstoragecoins/pages/payments-and-shipping/_i.html?">Payments &amp; Shipping</a> </li></ul> </div></div></div><div class="col-md-4"> <div class="browse-logos1"> <h3 class="coldstora1">Newsletter</h3> <div class="browse-logos"> <div class="messageb1"> <p>Add Store to your Favorites and receive email newsletters about new items and special promotions!</p><h2 class="Leaveq"><a href="http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=coldstoragecoins ">Submit</a></h2> </div></div></div></div></div></div><div class="all-rights-reserve">© All Rights Reserved To coldstoragecoins</div></div>';
	if(pageName != "PageAboutMeViewStore") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	$V(document).ready(function(){
		$V('.rs-pview >table:first-child').removeClass('1grid');
		$V('.rs-pview >table:first-child').addClass('1grid_new');
	});

	
});
