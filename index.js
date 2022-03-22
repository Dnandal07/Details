$(document).ready(function () {
    $("#e1").hide();
    $("#e2").hide();
    $("#e3").hide();
    $("#cancel").hide();
    $("#update").hide();
});

function cl() {
    $("#inname").val("");
    $("#inage").val("");
    $("#inlocation").val("");
}

var count = 0;
var arr = [];
var obj = {};
$("#submit").click(function () {
    obj.n = $("#inname").val();
    obj.a = $("#inage").val();
    obj.l = $("#inlocation").val();
    arr.push(obj);
    obj = {};
    $("tbody").append(`<tr id="r${count}">
    <td id="name${count}">${arr[count].n}</td>
    <td id="age${count}">${arr[count].a}</td>
    <td id="loc${count}">${arr[count].l}</td>
    <td id="e${count}"><button id="ed${count}" onclick="Edit(${count})"><i class="fas fa-edit"></i></button> <button id="del${count}" onclick="Del(${count})"><i class="fas fa-times"></i></button></td>
    </tr>`)
    $("#e" + count).show();
    $("#cancel").hide();
    cl();
    count++;
});

var i;

function Edit(id) {
    $("#inname").val($("#name" + id).text());
    $("#inage").val($("#age" + id).text());
    $("#inlocation").val($("#loc" + id).text());
    $("#submit").hide();
    $("#update").show();
    $("#update").addClass("m");
    $("#cancel").show();
    i=id;
}

function Del(id) {
    $("#r" + id).remove();
    cl();
    $("#cancel").hide();
    $("#update").hide();
    $("#submit").show();
}

$("#cancel").click(function () {
    cl();
    $("#cancel").hide();
    $("#update").hide();
    $("#submit").show();
});

$("#update").click(function(){
    arr[i].n = $("#inname").val();
    arr[i].a = $("#inage").val();
    arr[i].l = $("#inlocation").val();
    $("#name" + i).text(arr[i].n);
    $("#age" + i).text(arr[i].a);
    $("#loc" + i).text(arr[i].l);
    $("#cancel").hide();
    $("#update").hide();
    $("#submit").show();
    cl();
})