import spam


class TestTest:
    def test_it_works(self) -> None:
        p = spam.system('ls -la')
        assert p == 0  # exit code
