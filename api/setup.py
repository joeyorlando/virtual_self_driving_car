from distutils.core import setup, Extension


spam_module = Extension('spam', sources=['src/spam.cpp'])

setup(name='SpamExtension', version='1.0',
      description='This is a spam package', ext_modules=[spam_module])
