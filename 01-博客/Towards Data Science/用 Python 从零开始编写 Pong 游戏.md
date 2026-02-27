---
title: "用 Python 从零开始编写 Pong 游戏"
发布日期: 2026-02-27
作者: "Towards Data Science"
来源: "Towards Data Science"
原文链接: "https://towardsdatascience.com/coding-the-pong-game-from-scratch-in-python/"
译注: "根据原文翻译整理"
---

## 摘要

**一句话总结**
本文详细介绍了如何使用 Python 的 Turtle 模块和面向对象编程（OOP）方法，从零开始构建经典的 Pong（乒乓球）游戏。

**关键要点**
* **采用 OOP 架构**：通过创建独立的类（挡板、球、计分板）来组织代码，避免重复并提高程序的系统性。
* **初始化游戏屏幕**：使用 Turtle 的 `Screen` 类设置了一个宽 800px、高 600px 的黑色背景窗口，并关闭自动动画（`tracer(0)`）以手动控制刷新。
* **构建挡板（Paddle）类**：继承自 `Turtle` 类，生成 20x100px（`shapesize(5,1)`）的白色矩形，通过键盘监听器（Up/Down 和 W/S 键）控制左右挡板沿 y 轴移动。
* **构建球（Ball）类**：生成白色圆形对象，通过在主循环中每次将 x 和 y 坐标改变 10 个单位来实现移动。
* **墙壁碰撞检测**：当球的 y 坐标大于 275 或小于 -275 时，触发 `bounce_y()` 方法使球在 y 轴方向反弹。
* **挡板碰撞检测**：当球与挡板的距离小于 50px 且 x 坐标超过特定阈值（右侧 > 320，左侧 < -320）时，触发 `bounce_x()` 使球在 x 轴方向反弹。
* **失误与重置机制**：若球的 x 坐标越过 380 或 -380（即挡板未接住），球将重置回屏幕中心 (0,0) 并反转水平移动方向。
* **构建计分板（Scoreboard）类**：使用 Turtle 的 `write()` 函数在屏幕上方显示得分，并在任意一方未接住球时更新对应玩家的分数。

**风险/不足**
* **碰撞检测的局限性**：文中明确指出，仅使用 `distance()` 函数检测球与挡板的碰撞是不够的。因为该函数计算的是对象中心之间的距离，若球击中 100px 长挡板的边缘，可能无法被判定为接触，因此必须结合 x 坐标的阈值条件来共同判定碰撞。

## 正文

Pong 是数字娱乐史上最早、最具标志性的游戏之一。在其经典形式中，该游戏模拟了一场乒乓球比赛，屏幕上有两个垂直移动的挡板用来击打弹跳的球。每位玩家控制一个挡板，必须将球反弹给对方玩家，否则就会让对手得分。

这款游戏的历史颇为有趣。Pong 游戏是由 Allan Alcom 在被 Atari（雅达利）录用时作为一项测试而创建和编写的。这款游戏随后大获成功，在世界各地的酒吧和酒馆卖出了大量街机。有趣的是，由于人们投入了大量硬币，机器甚至会被钱币卡住，以至于酒吧老板们最终不得不打电话给 Atari 来修理他们的机器！

在本教程中，我们将使用 Python 的面向对象编程（OOP）方法来编写 Pong 游戏。这是一个中级 Python 编程教程，需要读者具备 Python 基础知识的初步了解（如列表等）。

### 理解项目

编写这个游戏有很多种方法。我们可以使用最直接的方法，一步一步地完成每个任务并进行必要的重复；或者我们可以使用 Python 的面向对象编程方法来避免重复，从而获得整洁有序的代码。我们将选择第二种方案，因为这会使游戏的程序更加系统化，减少混乱。

我们将使用 Python 的 Turtle 模块进行可视化游戏开发。Turtle 模块是一个内置功能，允许人们以简单的方式将代码可视化。它基本上由一只“海龟”组成，这只海龟会根据编程者的指令在屏幕上移动，并绘制出形状和线条。它是创建初级游戏并通过可视化屏幕获取即时反馈的强大工具。

以下是我们将会按顺序处理的关键任务：

1. **创建游戏屏幕**：这是显示 Pong 游戏的屏幕。
2. **创建挡板与挡板类**：这部分代码将在屏幕上创建一个挡板并配置其移动。我们将把它转换为一个类作为蓝图，从而创建 2 个挡板，一个在左侧，另一个在右侧。
3. **创建球类与对象**：继续使用 OOP 方法，我们将创建一个通用的球类，然后创建将在屏幕上移动的球对象，我们还将定义其相关的方法。
4. **检测球与顶部/底部墙壁的碰撞**：这部分代码将检测球与上下墙壁的碰撞，如果发生碰撞，它将使球在 y 轴上反弹。
5. **检测与挡板的碰撞**：这部分代码将检测球是否与挡板发生碰撞。如果是，它将使球反弹；否则，如果挡板未接住球，它将给对手加分，并将球重置在中心位置重新开始游戏。
6. **创建计分板类与对象**：这部分代码包括在一个单独的 Python 文件中创建 Scoreboard 类，并在主游戏文件中创建其对象。

### 创建游戏屏幕

第一个任务是创建游戏屏幕。这个屏幕将是矩形的，就像真实游戏一样。我们首先将在代码中导入 turtle 模块，并使用其 `Screen` 类来创建 `screen` 对象，然后使用 `Screen` 类的 `setup()` 方法将其自定义为宽度 800px、高度 600px。我们将使用 `bgcolor()` 方法将背景颜色设置为黑色，并使用 `title()` 方法将屏幕命名为“Pong Game”。

以下是创建 `screen` 对象的代码：

```python
from turtle import Turtle, Screen

#Setting up the Game Screen
screen = Screen()
screen.setup(width=800, height=600)
screen.bgcolor("black")
screen.title("Pong Game")

screen.exitonclick()
```

请注意，我们在最后一行使用了屏幕的 `exitonclick()` 方法，以确保屏幕会一直保持显示，直到我们点击它才会退出。如果您对上述方法有任何疑问，请随时查看 Turtle 模块的官方文档。

以下是我们运行程序时的输出：

![Image 1](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-49.png)

### 创建挡板与挡板类

下一个任务是创建一个挡板，这是位于游戏屏幕两侧的矩形对象。我们将使用 turtle 模块的 `shape()` 函数来创建这个挡板，使用 `color()` 方法将其自定义为白色，并使用 `shapesize()` 方法将其自定义为宽度 20px、高度 100px。

请注意，我们将 5 和 1 作为参数传递给了 `shapesize()` 方法。这是因为 `shapesize()` 的单位不是像素，而是以 20px 为基准的倍数。因此，为了获得 100px 的长度，我们将传递 5（因为 20px x 5 = 100px）。此外，我们将对其进行定位，使其在游戏开始时位于右侧的中间位置，即 y 坐标为 0，x 坐标为 350（记住我们的屏幕宽度是 800px）。我们将使用 `penup()` 方法来消除海龟移动时的轨迹，并使用 `goto()` 方法使其移动到所需位置。

```python
#Creating the Paddle
paddle = Turtle()
paddle.shape("square")
paddle.color("white")
paddle.shapesize(5,1)
paddle.penup()
paddle.goto(350,0)
```

以下是上述代码的输出。我们可以看到在游戏屏幕的右侧创建了一个挡板，且没有任何海龟轨迹。

![Image 2](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-48.png)

运行上述代码将创建挡板。然而，我们可以看到挡板是先被创建出来，然后再移动到其位置的。为了关闭动画，我们将在代码中添加屏幕类的 `tracer()` 方法。这也将要求我们手动更新屏幕：

```python
#Retain the Original Code
screen.tracer(0)

screen.update()
screen.exitonclick()
```

调用 `tracer()` 方法并向其传递值 0 将关闭动画。

一旦我们创建了挡板并通过关闭动画更新了屏幕，接下来就是配置挡板的移动。为此，我们将使用屏幕监听器。屏幕类的 `listen()` 方法允许我们监听键盘事件，而 `onkey()` 方法允许我们在按下特定键时调用已定义的函数。因此，我们将定义 `go_up` 和 `go_down` 函数，使挡板沿 y 轴上下移动。

```python
def go_up():
        new_y = paddle.ycor() + 40
        paddle.goto(paddle.xcor(), new_y)

    def go_down():
        new_y = paddle.ycor() - 40
        paddle.goto(paddle.xcor(),new_y)
```

可以看到，我们通过让挡板从其原始位置垂直移动 40px，定义了挡板的上下移动函数。接下来，我们将使用屏幕监听器功能，允许在按下键盘按键时调用这些函数。

```python
screen.listen()
screen.onkey(paddle.go_up, "Up")
screen.onkey(paddle.go_down, "Down")
```

![Image 3](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-50.png)

既然我们已经创建了挡板并配置了其移动机制，现在让我们将代码转换为面向对象编程方法。这是因为我们在游戏中需要 2 个挡板，拥有一个可以立即创建挡板的通用蓝图将使我们的任务变得更加轻松。我们将重构代码以轻松创建另一个挡板。我们将把所有与挡板相关的代码移动到另一个文件中，并在其中创建 `Paddle` 类。

由于我们创建的挡板本质上是 turtle 对象，我们将使这个挡板类继承自 `Turtle` 类。因此，我们将在 IDE 中创建一个新的 Python 文件，并在这个单独的 Python 文件中再次导入 turtle 模块的 `Turtle` 类。接下来，我们将使用类创建语法和 `def __init__()` 来定义 `Paddle` 类。由于左右挡板在游戏屏幕上的位置不同，我们将把 x 和 y 坐标作为属性添加到该类中。

现在我们将使用 OOP 中的继承概念，将 `Turtle` 类作为父类，而挡板类将继承其属性和方法。接下来，我们只需将之前创建挡板的代码中的“paddle”一词替换为“self”关键字。

```python
from turtle import Turtle, Screen

class Paddle(Turtle):
    def __init__(self,x,y):
        # Creating the Paddle Objects
        super().__init__()
        self.shape("square")
        self.color("white")
        self.shapesize(5, 1)
        self.penup()
        self.x = x
        self.y = y
        self.goto(x,y)

    # Configure Paddle Movement
    def go_up(self):
        new_y = self.ycor() + 40
        self.goto(self.xcor(), new_y)

    def go_down(self):
        new_y = self.ycor() - 40
        self.goto(self.xcor(),new_y)
```

如上所示，我们还定义了 `Paddle` 类的两个方法。一个是向上移动，第二个是我们之前已经定义过的向下移动。一旦定义了 `Paddle` 类，我们将创建挡板对象并配置两个挡板的上下移动：

```python
from paddle import Paddle

# Creating Paddle Objects
left_paddle = Paddle(-350, 0)
right_paddle = Paddle(350, 0)

# Configuring Paddles' Movement
screen.listen()
screen.onkey(right_paddle.go_up, "Up")
screen.onkey(right_paddle.go_down, "Down")
screen.onkey(left_paddle.go_up, "w")
screen.onkey(left_paddle.go_down, "s")
```

### 运行游戏

为了运行游戏并使用屏幕的 `update()` 方法对其进行更新，我们将定义一个 while 循环，该循环将持续运行，直到被外部停止，或者当循环条件变为 False 时停止。

```python
#Game is ON:
game_is_on = True
while game_is_on:
    screen.update()
```

现在，当您运行主文件时，您将看到游戏屏幕和挡板已被创建，并且挡板可以移动。

### 创建球类与对象

现在继续采用 OOP 方法来编写此游戏，我们将创建 `Ball` 类作为通用蓝图，并在主 Python 文件中从中创建球对象。我们将通过使 `Ball` 类继承自父类 `Turtle`，将球创建为一个 turtle 对象。我们将使用 turtle 类的 `color()` 和 `shape()` 方法来初始化一个白色的圆形球。和以前一样，我们将使用 turtle 的 `penup()` 方法来隐藏海龟的轨迹。

```python
from turtle import Turtle

class Ball(Turtle):

    def __init__(self):
        super().__init__()
        self.color("white")
        self.shape("circle")
        self.penup()
```

既然我们的球的属性已经定义好了，我们还将创建球在游戏开始时的移动方法。游戏开始时，球将位于游戏屏幕的中心，当屏幕刷新时，它将首先向右移动。在我们的主 while 循环中，我们将调用此方法，以便在游戏进行时球将持续移动，也就是说，在每次刷新游戏屏幕时，它的 x 和 y 坐标都会改变。

让球移动的方法是将它的 x 和 y 坐标都改变一个特定的数值，我们暂且设为 10。我们将定义球的 `move()` 方法并编写上述场景的代码：

```python
class Ball(Turtle):

    #Retain previous code
    def move(self):
        new_x = self.xcor() + 10
        new_y = self.ycor() + 10
        self.goto(new_x, new_y)
```

我们将把球对象的这个方法添加到游戏的 while 循环中进行调用：

```python
#Game is ON:
game_is_on = True
while game_is_on:
    screen.update()
    ball.move()
```

运行代码后，我们看到球很快就消失了，只剩下 2 个挡板。

![Image 4](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-51.png)

我们可以通过注释掉 `screen.tracer()` 行并重新运行代码来恢复动画。现在我们将看到 2 个挡板和球被创建并移动。

![Image 5](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-52.png)

另一种可视化方法是使用 `time` 模块，在游戏的主 while 循环中引入延迟。这可以按如下方式完成（无需注释掉 `tracer()` 函数）：

```python
import time

#Retain the Original Code
#Game is ON:
game_is_on = True
while game_is_on:
    time.sleep(0.1)
    screen.update()
    ball.move()
```

现在你可以看到球以较慢的速度移动，我们可以用挡板接住它。

### 检测球与顶部/底部墙壁的碰撞

既然我们的球已经创建并运行，我们需要设计一种机制，使球在撞击顶部和底部墙壁时反弹；至于左侧和右侧墙壁，球应该由左右挡板接住。如果球没有被接住，那就意味着另一名玩家得分。

因此，考虑到我们的球正从屏幕中心向右上角移动，当它到达角落时，它现在需要反弹。简单来说，反弹仅仅是 y 轴方向上的改变，因为球在 x 轴上仍会继续向前移动。我们现在将在 `Ball` 类中定义一个名为 `bounce()` 的新方法，并在球到达边界时在主游戏循环中调用它：

```python
from turtle import Turtle

class Ball(Turtle):

    def __init__(self):
        super().__init__()
        self.color("white")
        self.shape("circle")
        self.penup()
        self.x_move = 10
        self.y_move = 10

    def move(self):
        new_x = self.xcor() + self.x_move
        new_y = self.ycor() + self.y_move
        self.goto(new_x, new_y)

    def bounce(self):
        self.y_move *= -1
```

请注意，在上面的代码中，我们定义了 `Ball` 类的 2 个新属性：`x_move` 和 `y_move`，并使它们等于 10。然后，在 `move()` 方法中，我们用这些属性替换了数字 10。可以看出，这为我们的 `bounce()` 方法带来了便利。现在，每当球反弹时，它将向与其之前 y 轴位置相反的方向移动。这仅仅意味着，如果球正在向上移动并与墙壁碰撞，`y_move` 将从 +10 变为 -10，球将向下移动，因为负数意味着球向下移动。同理，与底部墙壁的碰撞会将这个 `y_move` 从 -10 变为 +10，然后球将向上移动。

现在，让我们在主 while 循环中添加这个条件：

```python
while game_is_on:
    #Retain Original Code

    #Detect Collision with Top and Bottom Walls
    if ball.ycor() > 275 or ball.ycor() < -275:
        ball.bounce_y()
```

在上面的代码中，我们添加了检测与墙壁碰撞的条件，然后调用 `bounce()` 方法。您可以为边界使用任何值，但经过反复尝试，275 这个值已经足够好了！

![Image 6](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-53.png)

### 检测与挡板的碰撞

既然我们知道如何让球从顶部和底部墙壁反弹，下一步就是检测与挡板的碰撞，并让球从挡板上反弹。我们将采用与之前类似的方法，只不过现在我们讨论的是 x 轴。

检测球与墙壁之间碰撞的常规方法是使用距离（distance）方法。如果两者之间的距离小于某个特定值，我们可以得出结论：两者已经接触/碰撞。然而，要知道 `distance()` 函数是通过计算两个 turtle 对象中心之间的距离来工作的。在我们的例子中，一个是 20x20px 的球，另一个是 20x200px 的矩形挡板。它们之间的距离会沿着挡板的长度而变化。如果球击中挡板的边缘，`distance()` 方法将无法判定它们已经发生了接触。

我们可以添加另一个条件，检查球是否在 x 轴上越过了某个点，向右移动（在右侧挡板的情况下），并且它与挡板的距离在 50px 以内，那么球一定发生了接触。我们将把这个条件添加到主 while 循环中。一旦检测到碰撞，我们将让球反弹，但这一次是在 x 轴方向上。让我们重新定义反弹函数，这样我们就有了两个反弹函数：一个是与挡板碰撞时在 x 轴上的反弹，另一个是与墙壁碰撞时在 y 轴上的反弹：

```python
def bounce_y(self):
        self.y_move *= -1

    def bounce_x(self):
        self.x_move *= -1
```

```python
while game_is_on:
    ...

    # Detect Collision of the Ball with the Right Paddle
    if ball.distance(right_paddle) < 50 and ball.xcor() > 320:
        ball.bounce_x()

    # Detect Collision of the Ball with the Left Paddle
    elif ball.distance(left_paddle) < 50 and ball.xcor() < -320:
        ball.bounce_x()
```

注意，在经过一些反复试验和球与挡板碰撞的可视化观察后，我们添加了 320 这个值。

![Image 7](https://contributor.insightmediagroup.io/wp-content/uploads/2026/02/image-150.png)

如果其中一个挡板未接住球，则另一名玩家得一分，游戏重新开始，球回到中心位置。为了检查挡板是否未接住球，我们可以通过考虑球在水平轴上越过某个点来进行可视化判断。我们知道屏幕的宽度是 800，挡板在 x 轴上的位置是 350，因此挡板的实际范围是从 340 到 360（因为它有 20px 的宽度）。所以如果球越过了 x 轴的 360，就意味着挡板未接住球。这意味着我们将把球重置到中心坐标 (0,0) 的起始位置。我们将定义球的 `reset_position()` 方法，当满足上述条件时将调用该方法。此外，我们还将添加一个反转球方向的功能，这样它就不会向右走，而是向左走。

```python
Class Ball(Turtle):
    ...
    def reset_position(self):
        self.goto(0, 0)
        self.bounce_x()
```

`bounce_x()` 方法将使球反转方向，就像它从挡板上反弹时一样。将这些条件放入游戏的主 while 循环中：

```python
while game_is_on:
    ...
    # Detect Right Paddle Missing the Ball
    if ball.xcor() > 380:
        ball.reset_position()

    # Detect Left Paddle Missing the Ball
    if ball.xcor() < -380:
        ball.reset_position()
```

运行上面的代码将向我们展示当挡板未接住球时会发生什么；球将反转方向并飞向另一个挡板。现在剩下的就是创建一个计分板，来存储并显示每位玩家的得分。

### 创建计分板

为了显示和更新每位玩家的得分，我们将在一个新的 Python 文件中定义一个计分板类（Scoreboard class）。我们将创建继承自 turtle 类的 `Scoreboard` 类，并定义有助于 turtle 对象进行文本写入的属性。首先，我们将初始化两个属性 `l_score` 和 `r_score`，并在游戏开始时将它们设置为 0。我们将定义两个方法 `l_point` 和 `r_point`，每当一名玩家未接住球时就会调用它们，并增加另一名玩家的得分。我们还将定义一个名为 `update_scoreboard()` 的方法，并在玩家获得额外分数时调用它。调用此方法时，它将简单地更新计分板。

以下是 `Scoreboard` 类的创建代码：

```python
from turtle import Turtle

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.color("white")
        self.penup()
        self.hideturtle()
        self.l_score = 0
        self.r_score = 0
        self.update_scoreboard()

    def update_scoreboard(self):
        self.clear()
        self.goto(-100, 200)
        self.write(self.l_score, align="center", font=("Arial", 40, "normal"))
        self.goto(100, 200)
        self.write(self.r_score, align="center", font=("Arial", 40, "normal"))

    def l_point(self):
        self.l_score += 1
        self.update_scoreboard()

    def r_point(self):
        self.r_score += 1
        self.update_scoreboard()
```

`update_scoreboard()` 方法创建了一个海龟，它会在主屏幕上写下两名玩家的得分。请注意，我们在这里使用了 Turtle 模块的 `write()` 函数。

接下来，我们将在主文件中导入并创建一个计分板对象，我们将使用该对象来访问其方法，以满足这两个条件：每当一名玩家的挡板未接住球时，另一名玩家将获得一分。

```python
from scoreboard import Scoreboard

#Initializing Scoreboard Object
scoreboard = Scoreboard()

while game_is_on:
    ...
   # Detect Right Paddle Missing the Ball
    if ball.xcor() > 380:
        ball.reset_position()
        scoreboard.l_point()

    # Detect Left Paddle Missing the Ball
    if ball.xcor() < -380:
        ball.reset_position()
        scoreboard.r_point()
```

游戏设计和编码到此就结束了。运行主 Python 文件将生成游戏屏幕及其组件，球会在游戏开始时移动。现在你只需要找个玩家一起玩这个游戏了！

你还可以通过修改代码来改变游戏的速度（这就留给你自己去探索啦！）

### 结论

在本文中，我们在 Python Turtle 模块的帮助下开发了经典的 Pong 游戏。我们使用了面向对象编程的概念来创建类，初始化属性和方法，并在主游戏文件中从这些类创建对象。这是一个中级 Python 项目，如果你在代码的某些部分遇到了困难，请务必参考 Python 官方文档或复习你的基础概念，特别是在本例中的 OOP（面向对象编程）概念。

## 关联主题

- [[00-元语/AI]]
- [[00-元语/llm]]
