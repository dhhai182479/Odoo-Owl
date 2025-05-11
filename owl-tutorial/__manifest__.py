# -*- coding: utf-8 -*-
{
    'name': "OWL",
    'summary': """OWL tutorial""",
    'description': """OWL tutorial""",
    'author': "Haidh",
    'category': 'Tutorials/owl',
    'version': '0.1',
    'depends': ['base', 'web'],
    'data': [
        'views/menu_root.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl/static/src/components/**/*',
        ],
    },
    'license': 'AGPL-3',
    "installable": True,
    "auto_install": False,
    "application": True,
}