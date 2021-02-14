#define PY_SSIZE_T_CLEAN
#include <Python.h>

static int sys(const char *cmd)
{
    return system(cmd);
}

static PyObject *spam_system(PyObject *self, PyObject *args)
{
    const char *command;
    int sts;

    if (!PyArg_ParseTuple(args, "s", &command))
        return NULL;
    sts = sys(command);
    return PyLong_FromLong(sts);
}

static PyMethodDef SpamMethods[] = {
    {"system", spam_system, METH_VARARGS, "Execute a shell command."},
    {NULL, NULL, 0, NULL}};

static struct PyModuleDef spammodule = {PyModuleDef_HEAD_INIT, "spam", "stuff", -1, SpamMethods};

PyMODINIT_FUNC PyInit_spam(void)
{
    return PyModule_Create(&spammodule);
}
