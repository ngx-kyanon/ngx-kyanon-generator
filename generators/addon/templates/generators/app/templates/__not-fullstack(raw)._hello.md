# <%= props.appName // From shared properties %>

<% if (props.sayHello) { -%>
Hello <%= props.helloName %>, from an awesome ngx-kyanon add-on!
<% } else { -%>
...was not in the mood to say hello :-(
<% }-%>
