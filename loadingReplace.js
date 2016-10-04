/**
* @file 替換目標元素成等待
* @author kent chung
*/
(function() {

    var LoadingReplace = function(element, options){
        console.log(options);
        this.loadingType = [
            '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
            '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
            '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>'
        ];

        this.element = element;
        this.opts = {};
        this.tempText = '';
        this.opts = $.extend( {}, $.fn.loadingReplace.defaults, options );
        if($(element).attr("data-load-type")){
            this.opts.type = $(element).attr("data-load-type");
        }else if(options!=null){
            this.opts.type = (options.type)? this.options.type : 0;
        }
        // if($(element).attr("data-load-class")){
        //     this.opts.customClass = $(element).attr("data-load-class");
        // }else if(options!=null){
        //     this.opts.customClass = (options.customClass)? options.customClass : '';
        // }
        // console.log(opts);
    };

    LoadingReplace.prototype.replace = function(){
        this.tempText = $(this.element).html();
        $(this.element).html(this.loadingType[this.opts.type]);
    };

    LoadingReplace.prototype.finish = function(){
        $(this.element).html(this.tempText);

    };

    $.fn.loadingReplace = function(options,prop,prop2) {
        var args = Array.prototype.slice.call(arguments);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('loadingReplace');
            if (!data){
                $this.data('loadingReplace', (data = new LoadingReplace(this, options)));
            }
            if(typeof options  == 'string'){
              var argumentArray = args.slice(1);
              data[options].apply(data,argumentArray);
            }
        });
    }
    $.fn.loadingReplace.Constructor = LoadingReplace;
    $.fn.loadingReplace.defaults={
        type:0,
        customClass:''
    };
})();
