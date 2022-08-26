Projects – adding new projects
It was very difficult to add new projects to the section, so I came up with a new method that made it all much easier. I used this method in the turtle’s website (in fact, it was the main approach in which that project was built). This method was: I used static class to build a component called Slide, and then in a JS file I called the class’s activate method. For this activate method, I passed all the arguments it needed to render the whole project to the section. Then I would just call this method again every time when I needed to add a new project. How I came up with this approach was: I first saw there were many repetitive parts among those blocks of code; and I also noticed there were parts where they differed from one another, so I could just create a static class to contain the whole code and then for those parts in which different projects vary from one another, I just made them parameters for the activate method, so the result was just I could call the activate method for adding a new project, which is so much simpler than having to repeatedly copy and paste an entire block of code and then make some changes.
After I created the static class Slides, the task of adding new projects has become very easy.
One thing to keep in mind about implementing this method: first, just copy and paste the entire original code block, and then try to break the html string down into several different parts managed by methods under the static class; then think of those variables in terms of arguments you pass into a function call or look at them as parameters for their related methods.
