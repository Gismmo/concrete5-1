// JavaScript Document

var advancedGoogleMapBlock ={

	validate:function(){
		var failed=0; 
 
		var api_keyF=$('#ccm_googlemap_block_api_key');
		var api_keyV=api_keyF.val();
		if(!api_keyV || api_keyV.length==0 ){
			alert(ccm_t('maps-api-key'));
			api_keyF.focus();
			failed=1;
		}
		
		if(failed){
			ccm_isBlockError=1;
			return false;
		}
		return true;
	} 
}

ccmValidateBlockForm = function() { return advancedGoogleMapBlock.validate(); }