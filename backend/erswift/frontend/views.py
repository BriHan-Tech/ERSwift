from django.shortcuts import redirect

def error_404(request, exception):
    data = {}
    return redirect("/#/404")

def error_500(request):
    data = {}
    return redirect("/#/500")

def error_400(request, exception):
    data = {}
    return redirect("/#/400")

def error_403(request, exception):
    data = {}
    return redirect("/#/403")