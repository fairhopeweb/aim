import time

from tests.base import TestBase

from aim.sdk.run import Run


class TestRunFinalizedAt(TestBase):
    def _query_run_finalized_at(self, run_hash):
        run = self.repo.get_run(run_hash)
        return run.finalized_at

    def test_implicit_run_delete(self):
        run_hash = []

        def _func():
            run = Run(system_tracking_interval=None)
            run_hash.append(run.hash)
            self.assertIsNone(run.finalized_at)
            for i in range(10):
                run.track(i, name='seq')
            self.assertIsNone(run.finalized_at)

        _func()

        time.sleep(.1)  # wait for tracking queue and gc to collect the run object
        self.assertIsNotNone(self._query_run_finalized_at(run_hash[0]))

    def test_explicit_run_delete(self):
        run = Run(system_tracking_interval=None)
        run_hash = run.hash
        for i in range(10):
            run.track(i, name='seq')
        del run
        self.assertIsNotNone(self._query_run_finalized_at(run_hash))

    def test_explicit_run_finalize(self):
        run = Run(system_tracking_interval=None)
        for i in range(10):
            run.track(i, name='seq')
        self.assertIsNone(run.finalized_at)
        run.finalize()
        self.assertIsNotNone(run.finalized_at)
