```javascript
var F = [
    {
        n: "Chocolate com Brigadeiro",
        p: 15,
        d: "Bolo de chocolate fofinho com brigadeiro cremoso, finalizado com granulado.",
        l: ["#5a2c1c", "#3a1810", "#5a2c1c", "#3a1810"],
        t: "sprinkles"
    },
    {
        n: "Prestígio",
        p: 15,
        d: "Bolo de chocolate com recheio de coco e brigadeiro, o clássico que todo mundo conhece.",
        l: ["#5a2c1c", "#fbf3e6", "#3a1810", "#fbf3e6"],
        t: "coco"
    },
    {
        n: "Ninho com Nutella",
        p: 18,
        d: "Bolo branco, creme de leite Ninho e Nutella em camadas. É o mais pedido.",
        l: ["#f1d9a8", "#f9ecd0", "#7a4a2b", "#f9ecd0"],
        t: "nutella",
        best: 1
    },
    {
        n: "Morango com Chantilly",
        p: 16,
        d: "Bolo branco com chantilly e morangos frescos. Leve, gelado e refrescante.",
        l: ["#f1d9a8", "#fff6ee", "#e0364c", "#fff6ee"],
        t: "morango"
    }
];

function brl(v) {
    return "R$ " + v.toFixed(2).replace(".", ",");
}

var tabs = document.getElementById("tabs");
var menu = document.getElementById("menu");

F.forEach(function (f, i) {
    var b = document.createElement("button");

    b.textContent = f.n;
    b.setAttribute("aria-pressed", "false");
    b.onclick = function () {
        show(i);
    };

    tabs.appendChild(b);

    var li = document.createElement("li");

    li.innerHTML =
        "<h3>" +
        f.n +
        (f.best ? '<span class="best">Mais pedido</span>' : "") +
        "</h3>" +
        '<span class="price">' +
        brl(f.p) +
        "</span>" +
        "<p>" +
        f.d +
        "</p>";

    menu.appendChild(li);
});

function show(i) {
    var f = F[i];
    var g = document.getElementById("layers");
    var h = "";
    var y = 70;
    var hh = 36;

    f.l.forEach(function (c, k) {
        h +=
            '<rect class="layer" x="0" y="' +
            (y + k * hh) +
            '" width="200" height="' +
            hh +
            '" fill="' +
            c +
            '"/>';
    });

    g.innerHTML = h;

    var t = "";

    if (f.t === "sprinkles") {
        t = '<ellipse cx="100" cy="56" rx="62" ry="16" fill="#4a2218"/>';

        [
            [70, 52, "#d52029"],
            [90, 48, "#fbf0e0"],
            [110, 50, "#4fa5ae"],
            [128, 54, "#d9a66b"],
            [100, 58, "#fbf0e0"],
            [80, 60, "#d9a66b"],
            [120, 60, "#d52029"]
        ].forEach(function (s) {
            t +=
                '<rect x="' +
                s[0] +
                '" y="' +
                s[1] +
                '" width="9" height="3.5" rx="1.7" fill="' +
                s[2] +
                '" transform="rotate(-20 ' +
                s[0] +
                " " +
                s[1] +
                ')"/>';
        });
    }

    if (f.t === "coco") {
        t = '<ellipse cx="100" cy="56" rx="62" ry="16" fill="#fbf3e6"/>';

        [
            [72, 52],
            [92, 47],
            [112, 50],
            [130, 55],
            [100, 58],
            [82, 60],
            [120, 60]
        ].forEach(function (s) {
            t +=
                '<circle cx="' +
                s[0] +
                '" cy="' +
                s[1] +
                '" r="3.5" fill="#fff"/>';
        });
    }

    if (f.t === "nutella") {
        t =
            '<ellipse cx="100" cy="56" rx="62" ry="16" fill="#7a4a2b"/>' +
            '<path d="M70 50 Q100 4 130 50 Z" fill="#5a3019"/>' +
            '<circle cx="100" cy="30" r="9" fill="#d52029"/>' +
            '<circle cx="100" cy="30" r="9" fill="none" stroke="#fff" stroke-width="2"/>' +
            '<rect x="92" y="29" width="16" height="3" fill="#fff"/>';
    }

    if (f.t === "morango") {
        t =
            '<ellipse cx="100" cy="56" rx="62" ry="16" fill="#fff6ee"/>' +
            '<path d="M70 52 Q100 0 130 52 Z" fill="#fff6ee" stroke="#f1d9a8" stroke-width="2"/>' +
            '<path d="M100 54 L84 34 Q100 24 116 34 Z" fill="#e0364c"/>' +
            '<path d="M92 30 L100 24 L108 30 Z" fill="#3b8f4f"/>';
    }

    document.getElementById("topping").innerHTML = t;
    document.getElementById("fname").textContent = f.n;
    document.getElementById("fprice").textContent =
        brl(f.p) + " por pote";

    Array.prototype.forEach.call(tabs.children, function (b, k) {
        b.setAttribute("aria-pressed", k === i ? "true" : "false");
    });
}

show(2);

// Configure sua chave Pix aqui.
var PIX = "";

(function () {
    var k = document.getElementById("pixkey");
    var b = document.getElementById("pixbtn");
    var ok = document.getElementById("pixok");

    if (!PIX) {
        k.textContent = "Chave Pix combinada pelo WhatsApp";
        b.style.display = "none";
        return;
    }

    k.textContent = PIX;

    b.onclick = function () {
        function done(m) {
            ok.textContent = m;

            setTimeout(function () {
                ok.textContent = "";
            }, 3000);
        }

        try {
            navigator.clipboard.writeText(PIX).then(
                function () {
                    done("Chave copiada");
                },
                fallback
            );
        } catch (e) {
            fallback();
        }

        function fallback() {
            var r = document.createRange();

            r.selectNodeContents(k);

            var s = window.getSelection();
            s.removeAllRanges();
            s.addRange(r);

            done("Toque e segure para copiar");
        }
    };
})();
```
