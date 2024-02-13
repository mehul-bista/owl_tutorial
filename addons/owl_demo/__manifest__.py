# -*- coding: utf-8 -*-
{
    'name': "Odoo OWL",
    'summary': """
        OWL - Odoo 16""",
    'description': """
        Odoo 16
    """,
    'author': "Bista",
    'website': "https://www.yourcompany.com",
    'category': 'web',
    'version': '16.0',
    'depends': ['base', 'mail', 'contacts', 'sale_management', 'sale'],
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/res_partner.xml',
        'views/odoo_services.xml',
        'views/external_libraries.xml',
        'views/sale_order.xml',
    ],
    'demo': [
        'demo/demo.xml',
    ],
    'assets': {
        'web.assets_backend' : [
            '/owl_demo/static/src/components/*/*.js',
            '/owl_demo/static/src/components/*/*.xml',
            '/owl_demo/static/src/components/*/*.scss',
        ]
    }
}
