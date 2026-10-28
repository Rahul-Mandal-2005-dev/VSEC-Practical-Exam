
function addTask() {
    let input = document.getElementById("task");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + " ";

    // Complete button
    let complete = document.createElement("button");
    complete.innerHTML = "Complete";

    complete.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    // Delete button
    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.onclick = function() {
        li.remove();
    };

    li.appendChild(complete);
    li.appendChild(del);

    document.getElementById("list").appendChild(li);

    input.value = "";
}
