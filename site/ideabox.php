	<link rel="stylesheet" href="components/com_ideabox/css/base.css">
	
    <div id="idea-box-body" ng-app="todo">

      <section id="todoapp" ng-controller="TodoCtrl">
        <header id="header">
          <h1>Idea Box</h1>
          <form id="todo-form" ng-submit="addTodo()">
            <input type="text" id="new-todo" placeholder="Ajouter une idée" autofocus autocomplete="off" ng-model="newtodo">
          </form>
        </header>

        <section id="main">
          <input type="checkbox" id="toggle-all" ng-model="allchecked" ng-click="checkAllTodo(allchecked)">
          <ul id="todo-list">
            <li ng-repeat="todo in todos | filter:statusFilter" ng-class="{completed : todo.completed, editing: todo.editing}" ng-dblclick="todo.editing = true">
              <div class="view">
                <input type="checkbox" class="toggle" ng-model="todo.completed">
                <label>{{todo.name}}</label>
                <button class="destroy" ng-click="removeTodo($index)"></button>
              </div>
              <form action="#">
                <input class="edit" ng-model="todo.name" ng-blur="editTodo(todo)">
              </form>
            </li>
          </ul>
        </section>

        <footer id="footer">
          <span id="todo-count"><strong>{{remaining}}</strong>&nbsp;idées restantes</span>
        </footer>

      </section>

      <script type="text/javascript" src="components/com_ideabox/js/angular.min.js"></script>
      <script type="text/javascript" src="components/com_ideabox/js/app.js"></script>
    </div>
