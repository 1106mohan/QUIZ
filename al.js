function validate()
{
    if(document.form.name.value=="")
    {
        alert("Name can not be empty");
        document.form.name.focus();
        return false;
    }
    if(document.form.age.value=="")
    {
        alert("This field required");
        document.form.age.focus();
        return false;
    }
    if(document.form.class.value=="")
    {
        alert("Enter the class");
        document.form.class.focus();
        return false;
    }
}