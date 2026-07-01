import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "office_emp_proj.settings"
)

app = get_wsgi_application()