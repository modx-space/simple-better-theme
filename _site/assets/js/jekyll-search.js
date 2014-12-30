! function(a) {
    a.fn.simpleJekyllSearch = function(b) {
        function c() {
            j.keyup(function() {
                a(this).val().length ? e(d(a(this).val())) : f()
            })
        }

        function d(b) {
            var c = [];
            return a.each(i, function(a, d) {
                for (var a = 0; a < h.length; a++)
                    void 0 !== d[h[a]] && d[h[a]].toLowerCase().indexOf(b.toLowerCase()) > 1 && (c.push(d), a = h.length)
            }), c
        }

        function e(b) {
            f(), k.append(a(g.searchResultsTitle)), b.length ? a.each(b, function(b, c) {
                if (b < g.limit) {
                    for (var d = g.template, b = 0; b < h.length; b++) {
                        var e = new RegExp("{" + h[b] + "}", "g");
                        d = d.replace(e, c[h[b]])
                    }
                    k.append(a(d))
                }
            }) : k.append(g.noResults)
        }

        function f() {
            k.children().remove()
        }
        var g = a.extend({
                jsonFile: "/search.json",
                jsonFormat: "title,tag,url,shortdate",
                template: '<a href="{url}" title="{title}">{title}{tag}</a>',
                searchResults: ".results",
                searchResultsTitle: "<h4>检索结果:</h4>",
                limit: "10",
                noResults: "<h5>啊哦,还没有你所需要的内容</h5>"
            }, b),
            h = g.jsonFormat.split(","),
            i = [],
            j = this,
            k = a(g.searchResults);
        g.jsonFile.length && k.length && a.ajax({
            type: "GET",
            url: g.jsonFile,
            dataType: "json",
            success: function(a) {
                i = a, c()
            },
            error: function(a, b, c) {
                console.log("***ERROR in JeyllSearch.js***"),
                console.log(a),
                console.log(b),
                console.log(c)
            }
        })
    }
}(jQuery);