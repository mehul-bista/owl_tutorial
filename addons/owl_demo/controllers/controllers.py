# -*- coding: utf-8 -*-
# from odoo import http


# class OwlDemo(http.Controller):
#     @http.route('/owl_demo/owl_demo', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/owl_demo/owl_demo/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('owl_demo.listing', {
#             'root': '/owl_demo/owl_demo',
#             'objects': http.request.env['owl_demo.owl_demo'].search([]),
#         })

#     @http.route('/owl_demo/owl_demo/objects/<model("owl_demo.owl_demo"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('owl_demo.object', {
#             'object': obj
#         })
