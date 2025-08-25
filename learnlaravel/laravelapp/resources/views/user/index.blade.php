<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>
    <h1>Active Users</h1>
    <ul>
        @foreach ($users as $user)
            <li>{{ $user->password }}</li>
        @endforeach
    </ul>
</body>
</html>