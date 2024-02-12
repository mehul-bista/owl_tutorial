# -*- coding: utf-8 -*-

from odoo import models, fields, api


class OwlTodo(models.Model):
    _name = 'odoo.todo.list'
    _description = 'OWL Todo List App'

    name = fields.Char(string="Task Name")
    completed = fields.Boolean()
    color = fields.Char()
    description = fields.Text()
