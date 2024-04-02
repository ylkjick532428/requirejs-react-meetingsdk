#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import sys, os

web_dir = os.path.join(os.path.dirname(__file__), 'www')
os.chdir(web_dir)

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Resource-Policy', 'cross-origin')

        SimpleHTTPRequestHandler.end_headers(self)

class NoRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cross-Origin-Resource-Policy', 'cross-origin')

        SimpleHTTPRequestHandler.end_headers(self)
if __name__ == '__main__':
    isCorp = sys.argv[1] if len(sys.argv) > 1 else ''
    isCorp = isCorp == 'corp'
    if (isCorp):
        test(CORSRequestHandler, HTTPServer, port=8000)
    else:
        test(NoRequestHandler, HTTPServer, port=8000)