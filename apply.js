//Sorting the HTML table
// getting the inner HTML of the tr to compare
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

//Comparing the coloumn to be sorted
const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// Creating the eventListner
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody')
    Array.from(table.querySelectorAll(' tbody tr:nth-child(n+1)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr) );
    const allth = document.querySelectorAll('th');
    if(this.asc){
        allth.forEach(all => {
            all.classList.remove('headerSortDown');
          });
        th.classList.add('headerSortUp');
    }
    else{
        allth.forEach(all => {
            all.classList.remove('headerSortUp');
          });
        th.classList.add('headerSortDown');
    }
})));


searchFunction = () => {
    let filter = document.querySelector(".search-txt2").value.toUpperCase();
    if(document.querySelector(".table").style.display != "none")
    {
        let table = document.querySelector(".searchable");
        let tr = table.getElementsByTagName("tr");
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                var text = td.querySelector('div p').innerText || td.querySelector('div p').textContent;
                if (text.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                } else {
                tr[i].style.display = "none";
                }
            }
        }
    }
    else{
        let grid = document.querySelector(".grid");
        let cards = grid.querySelectorAll(".card");
        for (var i = 0; i < cards.length; i++) {
            var card_text = cards[i].querySelectorAll(".card p:nth-child(2)")[0];
            if (card_text) {
                var text = card_text.innerText || card_text.textContent;
                if (text.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        }
    }
  };
  document.querySelector(".search-txt2").addEventListener("keyup", (() => {
      searchFunction();
      let filter = document.querySelector(".search-txt2").value.toUpperCase();
      if(filter.length>0)
      {
        var showMore = document.querySelector( ".show-more" );
        showMore.style.display = "None";
      }
      else{
        var showMore = document.querySelector( ".show-more" );
        showMore.style.display = "";
      }
  }));

  var mainObj = [
    {
        title: "SR_Admin_Documents_Samples Testing new doc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "Test document",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "New Doc Set",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "May 3 Document Sample For Testing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "SR_Admin_Documents_Samples Testing new samples",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "Test document",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "New Doc Set",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "May 3 Document Sample For Testing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "SR_Admin_Documents_Samples Testing new doc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "document",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "document",
        description: "Different.",
        status: "Published"
    },
    {
        title: "document",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    }
];

var addObj = [
    {
        title: "New Doc Set",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "May 3 Document Sample For Testing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "Test document",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    },
    {
        title: "New Doc Set",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste dolorum ipsam illo repellat ratione autem nam molestiae. Numquam, atque.",
        status: "Published"
    }
];


// showMore.addEventListener( "click", function(){
//     showMore.style.display = "none";
// });


var showMore = document.querySelector( ".show-more" );
showMore.addEventListener( "click", function(){
    if(document.querySelector(".table").style.display != "none")
    {
        var k = ''
        for(i = 0;i < addObj.length; i++){
            k+= '<tr>';
            k+= '<td><div class="coloumn1"><img class="doc-ico" src="images/doc.png" alt="doc-ico"><p title="'+addObj[i].title+'">'+ addObj[i].title + '</p></td>';
            k+= '<td><p title="'+addObj[i].description+'">'+addObj[i].description+'</p></td>';
            k+= '<td><span class="dot"></span><div class="published">'+ addObj[i].status +'</div></td>';
            k+= '</tr>';
        }
        document.querySelector('tbody').innerHTML += k;
    }
    else{
        var k = ''
        for(i = 0;i < addObj.length; i++){
            k+= '<div class="card">';
            k+= '<div class="image"><img class="doc-ico" src="images/doc.png" alt="doc-ico"></div>';
            k+= '<p title="'+addObj[i].title+'">'+addObj[i].title+'</p>';
            k+= '<p title="'+addObj[i].description+'">'+addObj[i].description+'</p>';
            k+= '</div>';
        }
        k+= '</div>';
        document.querySelector('.cards').innerHTML += k;
    }
    showMore.style.display = "none";
});

var k = ''
    for(i = 0;i < mainObj.length; i++){
        k+= '<tr>';
        k+= '<td><div class="coloumn1"><img class="doc-ico" src="images/doc.png" alt="doc-ico"><p title="'+mainObj[i].title+'">'+ mainObj[i].title + '</td>';
        k+= '<td><p title="'+mainObj[i].description+'">'+mainObj[i].description+'</p></td>';
        k+= '<td><span class="dot"></span><div class="published">'+ mainObj[i].status +'</div></td>';
        k+= '</tr>';
    }
document.querySelector('tbody').innerHTML = k;


displayTable = () => {
    document.querySelector(".table").style.display = "";
    document.querySelector(".grid").style.display = "none";
    var k = ''
    for(i = 0;i < mainObj.length; i++){
        k+= '<tr>';
        k+= '<td><div class="coloumn1"><img class="doc-ico" src="images/doc.png" alt="doc-ico"><p title="'+mainObj[i].title+'">'+ mainObj[i].title + '</p></td>';
        k+= '<td><p title="'+mainObj[i].description+'">'+mainObj[i].description+'</p></td>';
        k+= '<td><span class="dot"></span><div class="published">'+ mainObj[i].status +'</div></td>';
        k+= '</tr>';
    }
    document.querySelector('tbody').innerHTML = k;
};

displayGrid = () => {
    document.querySelector(".table").style.display = "none";
    document.querySelector(".grid").style.display = "";
    var k = '<div class="cards">'
    for(i = 0;i < mainObj.length; i++){
        k+= '<div class="card">';
        k+= '<div class="image"><img class="doc-ico" src="images/doc.png" alt="doc-ico"></div>';
        k+= '<p title="'+mainObj[i].title+'">'+mainObj[i].title+'</p>';
        k+= '<p title="'+mainObj[i].description+'">'+mainObj[i].description+'</p>';
        k+= '</div>';
    }
    k+= '</div>';
    document.querySelector('.grid').innerHTML = k;
};

var btn = document.querySelector( ".list-icon" );
btn.addEventListener( "click", function(e){
    var methodsToInvoke = [ displayGrid, displayTable ];
    var el = e.currentTarget;
    el.lastInvokedIndex = el.lastInvokedIndex >= methodsToInvoke.length ? 0 : (el.lastInvokedIndex || 0);
    methodsToInvoke[el.lastInvokedIndex++]();
    var showMore = document.querySelector( ".show-more" );
    showMore.style.display = "";
  });


